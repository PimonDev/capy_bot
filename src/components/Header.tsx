'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  useEffect(() => {
    document.querySelectorAll('nav ul > li').forEach((li) => {
      const listItem = li as HTMLLIElement;
      const submenu = listItem.querySelector('ul');
      if (!submenu) return;
      let hideTimeout: NodeJS.Timeout;

      const showMenu = () => {
        clearTimeout(hideTimeout);
        submenu.style.display = 'block';
      };

      const hideMenu = () => {
        hideTimeout = setTimeout(() => {
          submenu.style.display = 'none';
        }, 150);
      };

      listItem.addEventListener('mouseenter', showMenu);
      listItem.addEventListener('mouseleave', hideMenu);
      submenu.addEventListener('mouseenter', showMenu);
      submenu.addEventListener('mouseleave', hideMenu);
    });
  }, []);

  return (
    <header>
      <h1>La fiestica</h1>
      <p>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/24px-Flag_of_Venezuela.svg.png" alt="Bandera de Venezuela" width={24} height={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Explora el verdadero sabor de Venezuela
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/24px-Flag_of_Venezuela.svg.png" alt="Bandera de Venezuela" width={24} height={16} style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
      </p>
      <nav style={{ background: '#000000', padding: '1rem 0', textAlign: 'center' }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'inline-flex', gap: '2rem' }}>
          <li style={{ position: 'relative' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Inicio</Link>
            <ul style={{ position: 'absolute', left: 0, top: '2.2rem', background: '#222', padding: '0.5rem 1rem', borderRadius: '8px', listStyle: 'none', margin: 0, minWidth: '140px', display: 'none', zIndex: 10 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <Image src="https://cdn-icons-png.flaticon.com/16/337/337946.png" alt="Documento" width={18} height={18} />
                <span style={{ color: '#fff' }}>En camino</span>
              </li>
            </ul>
          </li>
          <li style={{ position: 'relative' }}>
            <Link href="/capybot" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Capy Bot</Link>
            <ul style={{ position: 'absolute', left: 0, top: '2.2rem', background: '#222', padding: '0.5rem 1rem', borderRadius: '8px', listStyle: 'none', margin: 0, minWidth: '140px', display: 'none', zIndex: 10 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <Image src="https://cdn-icons-png.flaticon.com/16/337/337946.png" alt="Documento" width={18} height={18} />
                <span style={{ color: '#fff' }}>En camino</span>
              </li>
            </ul>
          </li>
          <li style={{ position: 'relative' }}>
            <Link href="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Sobre Nosotros</Link>
            <ul style={{ position: 'absolute', left: 0, top: '2.2rem', background: '#222', padding: '0.5rem 1rem', borderRadius: '8px', listStyle: 'none', margin: 0, minWidth: '140px', display: 'none', zIndex: 10 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <Image src="https://cdn-icons-png.flaticon.com/16/337/337946.png" alt="Documento" width={18} height={18} />
                <span style={{ color: '#fff' }}>En camino</span>
              </li>
            </ul>
          </li>
          <li style={{ position: 'relative' }}>
            <Link href="/branch" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Sucursal</Link>
            <ul style={{ position: 'absolute', left: 0, top: '2.2rem', background: '#222', padding: '0.5rem 1rem', borderRadius: '8px', listStyle: 'none', margin: 0, minWidth: '140px', display: 'none', zIndex: 10 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <Image src="https://cdn-icons-png.flaticon.com/16/337/337946.png" alt="Documento" width={18} height={18} />
                <span style={{ color: '#fff' }}>En camino</span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
