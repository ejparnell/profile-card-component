import Image from 'next/image';
import styles from './ContentCard.module.css';

export default function ContentCard() {
    const avatarSize = 96;

    return (
        <div className={styles.contentCard}>
            <Image
                src="/image-victor.jpg"
                alt="Victor Crest"
                width={avatarSize}
                height={avatarSize}
                className={styles.avatar}
            />

            <div className={styles.userInfo}>
                <h1 className={styles.userName}>
                    Victor Crest <span className={styles.userAge}>26</span>
                </h1>
                <p className={styles.userLocation}>London</p>
            </div>

            <hr className={styles.divider} />

            <div className={styles.userStats}>
                <div className={styles.stat}>
                    <p className={styles.statValue}>80K</p>
                    <p className={styles.statLabel}>Followers</p>
                </div>
                <div className={styles.stat}>
                    <p className={styles.statValue}>803K</p>
                    <p className={styles.statLabel}>Likes</p>
                </div>
                <div className={styles.stat}>
                    <p className={styles.statValue}>1.4K</p>
                    <p className={styles.statLabel}>Photos</p>
                </div>
            </div>
        </div>
    );
}
