import React from "react";

interface NavProps {
  items: string[];
}

const Navigation: React.FC<NavProps> = ({ items }) => {
  return (
    <ul className="go-somewhere">
      {items.map((item) => {
        return (
          <li key={item}>
            <a>{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
