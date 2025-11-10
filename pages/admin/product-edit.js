import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
export default function ProductEdit() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({ title: '', slug: '', description: '', price: 0, stock: 0, images: [] });
  useEffect(() => { if (id) fetch(`/api/products/${id}`).then(r => r.json()).then(d => setData(d)); }, [id]);
  async function submit(e) {
    e.preventDefault();
    if (id) { await fetch(`/api/products/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); }
    else { await fetch('/api/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); }
    router.push('/admin/products');
  }
  return (
    <div style={{ padding: 20 }}>
      <h1>{id ? 'Edit' : 'Create'} Product</h1>
      <form onSubmit={submit}>
        <div><label>Title</label><input value={data.title} onChange={e => setData({ ...data, title: e.target.value })} /></div>
        <div><label>Slug</label><input value={data.slug} onChange={e => setData({ ...data, slug: e.target.value })} /></div>
        <div><label>Price</label><input type="number" value={data.price} onChange={e => setData({ ...data, price: Number(e.target.value) })} /></div>
        <div><label>Stock</label><input type="number" value={data.stock} onChange={e => setData({ ...data, stock: Number(e.target.value) })} /></div>
        <div><label>Description</label><textarea value={data.description} onChange={e => setData({ ...data, description: e.target.value })} /></div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
