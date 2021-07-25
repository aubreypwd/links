import Head from 'next/head'
import IconLink from '../components/IconLink.jsx';
import FadeIn from 'react-fade-in';

import {
	faGithub,
	faTwitter,
	faLinkedin,
	faWordpress,

//https://fontawesome.com/v5.15/icons/stack-overflow?style=brands
} from '@fortawesome/free-brands-svg-icons';

import {
	faHome,
	faInbox,
	faComments,

// https://fontawesome.com/v5.15/icons?d=gallery&p=1&q=skull&s=solid&m=free
} from '@fortawesome/free-solid-svg-icons';

const config = {

	url: "https://aubreypwd.com",
	title: "aubreypwdOS",
	author: "Aubrey Portwood",
	gravatar: "https://www.gravatar.com/avatar/09601923fd59a7433892711376c37e41/",
	initialIconSize: 96 * 4
}

export default function Index() {
	return <>

		<Head>
			<title>{config.title} | {config.author}</title>
			<meta name="description" content={config.title} />
			<link rel="icon" href={`${config.gravatar}?s=32`} />
		</Head>

		<FadeIn transitionDuration={400*4} delay={500}>
			<div className="icons">
				<ul>
					<li><IconLink href="https://twitter.com/aubreypwd" icon={faTwitter} newWindow={true} title="Twitter" size={config.initialIconSize} /></li>
					<li><IconLink href="https://github.com/aubreypwd" icon={faGithub} newWindow={true} title="Github" size={config.initialIconSize} /></li>
					<li><IconLink href="https://linkedin.com/in/aubreypwd" icon={faLinkedin} newWindow={true} title="LinkedIn" size={config.initialIconSize} /></li>
					<li><IconLink href="https://profiles.wordpress.org/aubreypwd/" icon={faWordpress} newWindow={true} title="WordPress.org" size={config.initialIconSize} /></li>
					<li><IconLink href="https://tlk.io/aubreypwd" icon={faComments} newWindow={true} title="Chat" size={config.initialIconSize} /></li>
				</ul>
			</div>
		</FadeIn>
	</>
}
