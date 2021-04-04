import React from 'react'

import { Button } from '../../../../components/Button'

import '../../../../styles/about-sidebar.css'

export const AboutSidebar = ({ selected }: { selected: string }) => (
  <aside className={'about-sidebar'}>
    <ul>
      <li>
        <h5>ABOUT US</h5>
      </li>
      <li>
        <Button
          href="/about"
          type={selected === 'home' ? 'secondary' : 'text'}
          iconLeft={'home'}
          style={{
            color: selected === 'home' ? 'var(--nav-hover)' : 'inherit',
          }}
        >
          Home
        </Button>
      </li>
      <li>
        <h5>PRIVACY</h5>
      </li>
      <li>
        <Button
          href="/about/privacy"
          type={selected === 'privacy-db' ? 'secondary' : 'text'}
          iconLeft={'dot'}
          style={{
            color: 'inherit',
          }}
        >
          Dot Browser
        </Button>
      </li>
      <li>
        <Button
          href="/about/privacy/website"
          type={selected === 'privacy-site' ? 'secondary' : 'text'}
          iconLeft={'globe'}
          style={{
            color: 'inherit',
          }}
        >
          Website
        </Button>
      </li>
      <li>
        <Button
          href="/about/privacy/id"
          type={selected === 'privacy-id' ? 'secondary' : 'text'}
          iconLeft={' '}
          style={{
            color: 'inherit',
          }}
        >
          Dot ID
        </Button>
      </li>
      <li>
        <Button
          href="/about/privacy/gdpr"
          type={selected === 'privacy-gdpr' ? 'secondary' : 'text'}
          iconLeft={' '}
          style={{
            color: 'inherit',
          }}
        >
          GDPR
        </Button>
      </li>
    </ul>
  </aside>
)
