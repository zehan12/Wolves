'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiChevronRight } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

const Breadcrumbs = () => {
    const path = usePathname();
    const get_breadcrumbs = function (url: string) {
        var rtn = [{ name: "Home", url: "/" }],
            acc = "", // accumulative url
            arr = url.substring(1).split("/");

        for (let i = 0; i < arr.length; i++) {
            acc = i != arr.length - 1 ? acc + "/" + arr[i] : "";
            rtn[i + 1] = {
                name: arr[i].charAt(0).toUpperCase() + arr[i].slice(1),
                url: acc,
            };
        }
        return rtn;
    };

    const routes = get_breadcrumbs(path);

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                {routes.map((path, index) => (
                    <li key={path.name}>
                        <div className="flex items-center">
                            {
                                path.name === "Home" ? "" :
                                    <BiChevronRight className="h-5 w-5 flex-shrink-0 text-gray-400" />
                            }
                            <Link
                                href={path.name === "Home" ? "/" : "/" + path.name.toLowerCase()}
                                className={`ml-4 text-sm font-medium hover:text-gray-700 ${routes.length - 1 !== index ? "text-gray-400" : "text-black"}`}
                            >
                                {path.name === "Home" ? <AiFillHome className="h-5 w-5 flex-shrink-0" /> : path.name.toLowerCase()}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumbs;