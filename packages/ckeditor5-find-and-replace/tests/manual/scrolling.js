/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import FindAndReplace from '../../src/findandreplace';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import ArticlePluginSet from '@ckeditor/ckeditor5-core/tests/_utils/articlepluginset';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';

// Note: We need to load paragraph because we don't have inline editors yet.
ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [ Essentials, Paragraph, FindAndReplace, Highlight, ArticlePluginSet, FontColor ],
		toolbar: [ 'heading', 'undo', 'redo', 'highlight', 'bold', 'fontColor', 'findAndReplace' ]
	} )
	.then( editor => {
		window.editor = editor;

		const button = document.getElementById( 'readonly-toggle' );
		let isReadOnly = false;

		button.addEventListener( 'click', () => {
			isReadOnly = !isReadOnly;

			editor.enableReadOnlyMode( 'manual-test', isReadOnly );

			editor.editing.view.focus();
		} );
	} )
	.catch( err => {
		console.error( err.stack );
	} );
