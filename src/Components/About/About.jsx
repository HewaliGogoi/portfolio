import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
// import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	// const [width] = WindowSize();
	
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://pro2-bar-s3-cdn-cf5.myportfolio.com/17a47d9e8f4727ce5f3e48805b2d8eb2/67cb1a46-1d0c-45fe-ab3f-520e4802b1b8_rwc_0x7x800x626x800.gif?h=3ef38d2bcece76203455258e0d585fe9"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! My name is Hewali and I enjoy creating things that are live on the internet. My interest in web development started
					back last year when I was trying to edit things on the web —
					taught me a lot about HTML & CSS!. <br />
					<br /> Fast Forwarding to today, I built a number of web
					applications and 2 major projects. Learned a great deal
					about teamwork, leadership, and communication. After months
					of rigorous training, here I am
					<span style={{ color: `#00a0a0` }}>
						{' '}
						looking for an opportunity as a full stack web developer
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
