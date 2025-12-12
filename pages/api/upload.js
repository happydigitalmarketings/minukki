
import { v2 as cloudinary } from "cloudinary";
import busboy from "busboy";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const bb = busboy({ headers: req.headers });
    let uploadDone = false;

    bb.on("file", (fieldname, file, filename) => {
      // Determine folder based on query parameter
      const folder = req.query.type === "banner" ? "minikki/banners" : "minikki/products";

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folder,
          resource_type: "auto",
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            if (!uploadDone) {
              uploadDone = true;
              return res.status(500).json({ message: "Upload failed", error: error.message });
            }
          } else {
            uploadDone = true;
            return res.status(200).json({ url: result.secure_url });
          }
        }
      );

      // Pipe the file stream directly to Cloudinary
      file.pipe(uploadStream);

      file.on("error", (err) => {
        console.error("File stream error:", err);
        if (!uploadDone) {
          uploadDone = true;
          return res.status(400).json({ message: "File error", error: err.message });
        }
      });
    });

    bb.on("error", (err) => {
      console.error("Form parse error:", err);
      if (!uploadDone) {
        uploadDone = true;
        return res.status(400).json({ message: "Parse error", error: err.message });
      }
    });

    req.pipe(bb);
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ message: "Upload failed", error: error.message });
  }
}
