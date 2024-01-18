import styles from './SideNavigation.module.css'
import Image from 'next/image'
import MenuItem from '../MenuItem'


export default function SideNavigation() {
    return (
        <>
            <div className={styles.sidenav}>
                <Image className={styles.profile} src={'/images/personal-icon.png'} alt="Autor" width="90" height="70" priority />
                <p className={styles.name}>Irina Lim </p>
                <p className={styles.job}>Desiger / Developer </p>

                <div className={styles.menu}>
                    <MenuItem title="Experiences" />
                    <MenuItem title="Education" />
                    <MenuItem title="Projects" />
                    <MenuItem title="Volunteering" />
                    <MenuItem title="Skills" />
                    <MenuItem title="Interests" />

                </div>
            </div>

        </>
    )
}
