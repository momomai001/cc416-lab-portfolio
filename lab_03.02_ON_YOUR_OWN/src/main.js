import './style.css'
document.querySelector('#app').innerHTML=`
<style>
@media(max-width:700px){
.grid-4{grid-template-columns:1fr 1fr !important}
.grid-2{grid-template-columns:1fr !important}
h1{font-size:24px !important}
.padd{padding:16px !important}
}
.card-anim{transition:0.3s}
.card-anim:hover{transform:translateY(-3px);box-shadow:0 10px 25px rgba(16,185,129,0.2) !important}
</style>
<div style="min-height:100vh;background:#eef2f7;display:flex;justify-content:center;padding:20px;font-family:Inter,sans-serif">
<div style="width:100%;max-width:900px;background:#eef2f7;border-radius:14px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.15);border:1px solid #d1d5db">
<div style="background:linear-gradient(to bottom,#f9fafb,#e5e7eb);padding:12px 16px;display:flex;gap:8px;border-bottom:1px solid #d1d5db"><div style="width:12px;height:12px;background:#ef4444;border-radius:50%"></div><div style="width:12px;height:12px;background:#f59e0b;border-radius:50%"></div><div style="width:12px;height:12px;background:#10b981;border-radius:50%"></div><div style="flex:1;text-align:center;font-size:11px">localhost:5173 — LAB 03.12</div></div>
<div style="background:#f3f4f6;padding:20px">
<div class="padd" style="background:white;border-radius:14px;padding:28px;box-shadow:0 4px 12px rgba(0,0,0,0.05)">
<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:18px">
<h1 style="font-size:30px;font-weight:800;color:#0f172a;margin:0">LAB 03.02 - Iteration 2</h1>
<div style="display:flex;gap:8px"><span onclick="navigator.clipboard.writeText('Iteration 2')" style="background:#2563eb;color:white;padding:6px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer">Iteration 2</span><span onclick="navigator.clipboard.writeText('Active')" style="background:#10b981;color:white;padding:6px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer">Active</span></div>
</div>
<div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:12px 14px;display:flex;gap:10px;margin-bottom:20px;font-size:13px;color:#334155"><div style="width:22px;height:22px;border-radius:50%;border:1.5px solid #059669;display:flex;align-items:center;justify-content:center;color:#059669;font-weight:700;font-size:12px">i</div><p style="margin:0;line-height:1.5">This is the output of <b style="color:#065f46">main.js</b> — Successfully rendered for <b>Lab 03.02 Iteration 2</b> with improved layout, highlighted profile, and integrated Git workflow documentation.</p></div>

<h2 style="font-size:20px;font-weight:800;margin:0 0 12px;background:linear-gradient(90deg,#2563eb,#7c3aed,#db2777,#ea580c,#059669);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Student Details 🌈</h2>
<div style="border:1px solid #d1d5db;border-radius:8px;overflow:hidden;margin-bottom:20px">
<div style="display:grid;grid-template-columns:1.2fr 1.5fr 0.8fr 0.8fr;background:linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899,#f59e0b,#10b981,#06b6d4);font-weight:800;font-size:12px;color:white"><div style="padding:12px;text-align:center;border-right:1px solid rgba(255,255,255,0.3)">Name</div><div style="padding:12px;text-align:center;border-right:1px solid rgba(255,255,255,0.3)">Course</div><div style="padding:12px;text-align:center;border-right:1px solid rgba(255,255,255,0.3)">Year Level</div><div style="padding:12px;text-align:center">Section</div></div>
<div class="grid-4" style="display:grid;grid-template-columns:1.2fr 1.5fr 0.8fr 0.8fr;background:white;font-size:12px"><div style="padding:14px;border-right:1px solid #eee"><span style="background:#bbf7d0;color:#064e3b;padding:3px 8px;border-radius:4px;font-weight:700">Maila Alarao</span></div><div style="padding:14px;border-right:1px solid #eee"><span style="background:#d1fae5;color:#065f46;padding:3px 8px;border-radius:4px;font-weight:600">BSIS</span></div><div style="padding:14px;border-right:1px solid #eee;text-align:center"><span onclick="alert('1st Year')" style="background:#a7f3d0;color:#064e3b;padding:4px 10px;border-radius:99px;font-weight:700;cursor:pointer">1st Year</span></div><div style="padding:14px;text-align:center"><span onclick="alert('BSIS 1B')" style="background:#064e3b;color:white;padding:4px 10px;border-radius:99px;font-weight:700;cursor:pointer">BSIS 1B</span></div></div>
</div>

<!-- NEW CARD 1: What's New -->
<div class="card-anim" style="border:1px solid #a7f3d0;border-radius:10px;padding:16px;margin-bottom:20px;background:linear-gradient(to bottom right,white,#ecfdf5)">
<h3 style="margin:0 0 10px;font-size:16px;color:#065f46">✨ What's New in Iteration 2</h3>
<div class="grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12px;color:#334155">
<div style="background:white;padding:10px;border-radius:6px;border:1px solid #d1fae5">✅ Added mint green workflow section</div>
<div style="background:white;padding:10px;border-radius:6px;border:1px solid #d1fae5">✅ Improved mobile responsive layout</div>
<div style="background:white;padding:10px;border-radius:6px;border:1px solid #d1fae5">✅ Added rainbow highlights + clickable badges</div>
<div style="background:white;padding:10px;border-radius:6px;border:1px solid #d1fae5">✅ Created new branch: add-workflow-section</div>
</div>
</div>

<!-- NEW CARD 2: Git Commands -->
<h2 style="font-size:20px;font-weight:700;color:#334155;margin:0 0 12px">My Git Workflow</h2>
<div style="border:1px solid #a7f3d0;border-radius:8px;overflow:hidden;background:white">
<div style="display:grid;grid-template-columns:1fr 80px;background:#ecfdf5;padding:10px;font-weight:700;font-size:12px;color:#065f46"><div>Command</div><div style="text-align:center">Stage</div></div>
<div style="font-family:monospace;font-size:11px">
<div style="display:grid;grid-template-columns:1fr 80px;border-bottom:1px solid #f1f5f9"><div style="padding:10px">git checkout -b add-workflow-section</div><div style="padding:10px;text-align:center"><span onclick="navigator.clipboard.writeText('git checkout -b add-workflow-section')" style="background:#d1fae5;padding:3px 8px;border-radius:99px;font-size:9px;font-weight:700;color:#065f46;cursor:pointer">BRANCH</span></div></div>
<div style="display:grid;grid-template-columns:1fr 80px;border-bottom:1px solid #f1f5f9"><div style="padding:10px">git add .</div><div style="padding:10px;text-align:center"><span onclick="navigator.clipboard.writeText('git add .')" style="background:#d1fae5;padding:3px 8px;border-radius:99px;font-size:9px;font-weight:700;color:#065f46;cursor:pointer">STAGE</span></div></div>
<div style="display:grid;grid-template-columns:1fr 80px;border-bottom:1px solid #f1f5f9;background:#f0fdf4"><div style="padding:10px;font-weight:700;color:#065f46">git commit -m "Add workflow section to Lab 03.02"</div><div style="padding:10px;text-align:center"><span onclick="navigator.clipboard.writeText('git commit -m Add workflow section to Lab 03.02')" style="background:#10b981;padding:3px 8px;border-radius:99px;font-size:9px;font-weight:700;color:white;cursor:pointer">COMMIT</span></div></div>
<div style="display:grid;grid-template-columns:1fr 80px;border-bottom:1px solid #f1f5f9"><div style="padding:10px">git push -u origin add-workflow-section</div><div style="padding:10px;text-align:center"><span onclick="navigator.clipboard.writeText('git push -u origin add-workflow-section')" style="background:#d1fae5;padding:3px 8px;border-radius:99px;font-size:9px;font-weight:700;color:#065f46;cursor:pointer">PUSH</span></div></div>
<div style="display:grid;grid-template-columns:1fr 80px"><div style="padding:10px;font-weight:700">git merge add-workflow-section</div><div style="padding:10px;text-align:center"><span onclick="navigator.clipboard.writeText('git merge add-workflow-section')" style="background:#064e3b;padding:3px 8px;border-radius:99px;font-size:9px;font-weight:700;color:white;cursor:pointer">MERGE</span></div></div>
</div>
</div>

</div>
<div style="display:flex;justify-content:space-between;margin-top:15px;font-size:10px;color:#6b7280"><span>Rendered by Vite • ${new Date().toLocaleString()} • Iteration 2</span><span>LAB 03.12 • Mobile Optimized</span></div>
</div>
</div>
</div>
`