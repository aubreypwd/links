import {site} from '../next.config.js';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import posts from '../posts.json';
import { getFlatPosts, getPostCategory } from '../functions.jsx';
import aZKeyCodes from '../a-z-keycodes.json';

export default function Navigator( { slug } ) {
	const router = useRouter();

	useEffect( () => {
		const input = document.getElementById( 'input' );

		if ( ! input ) {
			return;
		}

		input.focus();
		input.select();
	} );

	const valids = [

		// Any of the categories.
		...Object.keys( posts ),

		// Or help.
		'help',
	];

	function preventDefault( event ) {
		event.preventDefault();
	}

	function isHelp( value ) {
		return 'help' === event.target.value ||
			'?' === event.target.value;
	}

	function styleInput( event ) {
		event.preventDefault();

		// Always reset.
		event.target.classList.remove( 'invalid' );
		event.target.classList.remove( 'valid' );

		if ( ! valids.includes( event.target.value ) ) {

			// Invalid.
			event.target.classList.add( 'invalid' );
			event.target.classList.remove( 'valid' );

			return;
		}

		// Valid
		event.target.classList.remove( 'invalid' );
		event.target.classList.add( 'valid' );
	}

	function navigate( event ) {
		styleInput( event );

		if ( ! aZKeyCodes.includes( event.code ) ) {
			return; // Not a-z.
		}

		if ( '' === event.target.value ) {
			router.push( '/' );
			return;
		}

		if ( isHelp( event.target.value ) ) {
			router.push( '/help' );
			return;
		}

		if ( ! valids.includes( event.target.value ) ) {
			return; // Nothing valid, do nothing.
		}

		router.push( event.target.value );
	}

	function getDefaultInputValue() {
		return getPostCategory( slug, posts );
	}

	return <>
		<input
			className="navigator"
			type="text"
			id="input"
			onClick={preventDefault}
			onKeyUp={navigate}
			autoComplete="off"
			onFocus={styleInput}
			onSelect={styleInput}
			maxLength="19"
			defaultValue={getDefaultInputValue()} />
	</>
};

