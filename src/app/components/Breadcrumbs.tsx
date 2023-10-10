'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        <div className='flex gap-3'>
            {
                routes.map((path, index) => (
                    <Link
                        key={path.name}
                        href={path.name === "Home" ? "/" : "/"+path.name.toLowerCase()}
                        className={`text-sm ${routes.length - 1 !== index ? "text-gray-400" :"text-black" }`}
                    >
                        {path.name + `${routes.length - 1 !== index ? " / " : ""}`}
                    </Link>)
                )
            }
        </div>
    )
}

export default Breadcrumbs;