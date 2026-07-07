import { Link } from 'react-router'
import type { NavItemType } from '../type/type'

type Props = {
    name: string,
    navItem: NavItemType[]
    linkType?: 'a' | 'link'
}

function FooterLinkList({ name, navItem, linkType }: Props) {
    return (
        <div className="space-y-2">
            <h5 className="text-neutral-200 font-semibold text-xs tracking-wider">
                {name}
            </h5>
            <ul className="space-y-1.5 text-neutral-500">
                {navItem.map((item) => (
                    <li key={item.name}>
                        {
                            linkType === 'a'
                                ? <a href={item.href} className="hover:text-neutral-300 transition">{item.name}</a>
                                : <Link to={item.href} className="hover:text-neutral-300 transition">{item.name}</Link>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinkList