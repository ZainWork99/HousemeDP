import { PrimaryButton } from '@components/ui/button';
import React, { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <header className="header-container">
      <div className="header-container-pappi">
        <div className="flex items-center justify-between">
          <div>Logo</div>
          <div>
            <nav>
              <ul className="flex items-center space-x-6">
                <li>Home</li>
                <li>About</li>
                <li>
                  <PrimaryButton>Sign Up</PrimaryButton>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
