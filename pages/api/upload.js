import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";
import fs from "fs";

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

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(400).json({ message: "Parse error", error: err.message });
    }

    const file = files.image;
    const folder = fields.type === "banner" ? "minikki/banners" : "minikki/products";

    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder,
        resource_type: "auto",
      });

      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return res.status(500).json({ message: "Upload failed", error: error?.message || "Unknown error" });
    }
  });
}
