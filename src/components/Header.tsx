import { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Divider = () => (
  <div className="border-l border-solid border-black"></div>
);

const headerBaseClass =
  "text-lg font-title py-2 w-full flex justify-center text-black transition-all hover:scale-105 hover:underline";
const HeaderItem = ({ path, label }: { path: string; label: string }) => {
  const navigate = useNavigate();
  return (
    <NavLink
      to={path}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!(document as any).startViewTransition) {
          // return navigate(newRoute);
        } else {
          return (document as any).startViewTransition(() => {
            navigate(path);
          });
        }
      }}
      className={({ isActive }) =>
        isActive
          ? `${headerBaseClass} text-black underline underline-offset-4`
          : `${headerBaseClass} text-black`
      }
    >
      {label}
    </NavLink>
  );
};
const routes = [
  { path: "/", label: "Narrative" },
  { path: "/data", label: "Data" },
  { path: "/about", label: "About" },
  { path: "/acknowledgement", label: "Acknowledgement" },
];
export function Header() {
  return (
    <nav className="w-full">
      <h1 className="flex justify-center text-5xl py-2">
        Chinese Australian Archive
      </h1>
      <div className="border-y border-solid border-black px-4 w-full flex justify-around">
        {routes.map((route, index) => (
          <Fragment key={index}>
            <HeaderItem path={route.path} label={route.label} />
            {index !== routes.length - 1 && <Divider />}
          </Fragment>
        ))}
      </div>
    </nav>
  );
}
