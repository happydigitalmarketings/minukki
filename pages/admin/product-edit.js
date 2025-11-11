import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProductEdit() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({ title: '', slug: '', description: '', price: 0, stock: 0, images: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    setLoading(true);
    setError('');
    fetch(`/api/products/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          // Try to parse error message, otherwise read as text
          const txt = await res.text();
          try {
            const parsed = JSON.parse(txt);
            throw new Error(parsed.message || 'Failed to load product');
          } catch (e) {
            // if txt is empty or not JSON
            throw new Error(txt || `Request failed (${res.status})`);
          }
        }
        // safe to parse JSON
        return res.json();
      })
      .then((d) => {
        if (!mounted) return;
        if (d) setData(d);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || 'Failed to fetch product');
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => { mounted = false; };
  }, [id]);

  async function submit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const endpoint = id ? `/api/products/${id}` : '/api/products';
      const method = id ? 'PUT' : 'POST';
      const res = await fetch(endpoint, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) {
        const txt = await res.text();
        try { const parsed = JSON.parse(txt); throw new Error(parsed.message || 'Save failed'); } catch { throw new Error(txt || `Save failed (${res.status})`); }
      }
      setSuccess('Product saved successfully');
      // small delay so the admin sees the success state
      setTimeout(() => router.push('/admin/products'), 600);
    } catch (err) {
      setError(err.message || 'Failed to save product');
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">{id ? 'Edit' : 'Create'} Product</h1>
        <p className="text-sm text-gray-500">Use this form to {id ? 'update' : 'create'} a product. Changes will be saved to the database.</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {loading && <div className="mb-4 text-sm text-gray-600">Loading product...</div>}
        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
        {success && <div className="mb-4 text-sm text-green-600">{success}</div>}

        <form onSubmit={submit} className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={data.title} onChange={e => setData({ ...data, title: e.target.value })} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Slug</label>
            <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={data.slug} onChange={e => setData({ ...data, slug: e.target.value })} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" value={data.price} onChange={e => setData({ ...data, price: Number(e.target.value) })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Stock</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" value={data.stock} onChange={e => setData({ ...data, stock: Number(e.target.value) })} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows={6} value={data.description} onChange={e => setData({ ...data, description: e.target.value })} />
          </div>

          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={() => router.push('/admin/products')} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
