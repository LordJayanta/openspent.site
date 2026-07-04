import { Link } from 'react-router'
import type { NavItemType } from '../type/type'

type Props = {
    name: string,
    navItem: NavItemType[]
}

function FooterLinkList({ name, navItem }: Props) {
    return (
        <div className="space-y-2">
            <h5 className="text-neutral-200 font-semibold text-xs tracking-wider">
                {name}
            </h5>
            <ul className="space-y-1.5 text-neutral-500">
                {navItem.map((item) => (
                    <li key={item.name}>
                        <Link to={item.href} className="hover:text-neutral-300 transition">{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinkList