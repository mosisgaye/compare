// components/Sidebar.tsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 bg-gray-100 p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Sommaire</h2>
      <ul className="space-y-2">
        <li><a href="#top-5">Top 5 Forfaits Mobiles</a></li>
        <li><a href="#choisir-operateur">Choisir le Bon Opérateur</a></li>
        <li><a href="#type-forfait">Types de Forfaits</a></li>
        <li><a href="#5g">Forfaits 5G</a></li>
        <li><a href="#moins-10">Forfaits à Moins de 10€</a></li>
        <li><a href="#sans-engagement">Forfaits Sans Engagement</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
