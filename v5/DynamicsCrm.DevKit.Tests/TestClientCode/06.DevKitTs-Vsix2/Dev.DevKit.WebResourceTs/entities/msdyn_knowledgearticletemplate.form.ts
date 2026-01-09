/**
 * msdyn_knowledgearticletemplate.form.ts - msdyn_knowledgearticletemplate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_knowledgearticletemplate containing form classes: msdyn_knowledgearticletemplate.FormClassName
 * 3. Aggregate Form class: msdyn_knowledgearticletemplate.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_knowledgearticletemplate {

	// ========================================================================
	// Form: msdyn_knowledgearticletemplate_Main_Form
	// ========================================================================

	export namespace msdyn_knowledgearticletemplate_Main_Form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the body of the article stored in HTML format. */
			msdyn_content: DevKit.Controls.ActionCards;
			/** Description */
			msdyn_Description: DevKit.Controls.String;
			/** Shows whether this article is only visible internally. */
			msdyn_isinternal: DevKit.Controls.Boolean;
			/** Keywords */
			msdyn_keywords: DevKit.Controls.Memo;
			/** Article Template Language Id */
			msdyn_languagelocaleid: DevKit.Controls.String;
			/** Article Language Name */
			msdyn_LanguageLocaleIdName: DevKit.Controls.String;
			/** Type a name for the Knowledge Article Template */
			msdyn_name: DevKit.Controls.String;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			msdyn_subjectid: DevKit.Controls.Lookup;
			/** Type a title for the Knowledge Article Template */
			msdyn_title: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_92E59EE7_820A_42FC_907F_F86D2C4677C2TabSections {
			/** TEMPLATE DATA */
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_1: DevKit.Controls.Section;
			/** ARTICLE DATA */
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_2: DevKit.Controls.Section;
			/** CONTENT */
			Content: DevKit.Controls.Section;
		}

		/** General */
		export interface I_92E59EE7_820A_42FC_907F_F86D2C4677C2Tab extends DevKit.Controls.ITab {
			Section: I_92E59EE7_820A_42FC_907F_F86D2C4677C2TabSections;
		}

		export interface ITabs {
			/** General */
			_92E59EE7_820A_42FC_907F_F86D2C4677C2: I_92E59EE7_820A_42FC_907F_F86D2C4677C2Tab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
		}

		/**
		 * QuickForm interface
		 * Contains quick view form controls
		 */
		export interface IQuickForm {
		}

		/**
		 * Process interface
		 * Contains business process flow definitions
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

		/**
		 * Dialog interface
		 * For quick create dialogs or other dialog forms
		 */
		export interface IDialog extends DevKit.IDialog {
		}
	}

	/**
	 * msdyn_knowledgearticletemplate_Main_Form Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_knowledgearticletemplate.msdyn_knowledgearticletemplate_Main_Form(executionContext)
	 */
	export class msdyn_knowledgearticletemplate_Main_Form extends FormBase<msdyn_knowledgearticletemplate_Main_Form.IBody, msdyn_knowledgearticletemplate_Main_Form.IHeader, msdyn_knowledgearticletemplate_Main_Form.IGrid, msdyn_knowledgearticletemplate_Main_Form.INavigation, msdyn_knowledgearticletemplate_Main_Form.IQuickForm, msdyn_knowledgearticletemplate_Main_Form.IProcess, msdyn_knowledgearticletemplate_Main_Form.IDialog> {
		/**
		 * Creates a msdyn_knowledgearticletemplate_Main_Form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_content', 'msdyn_Description', 'msdyn_isinternal', 'msdyn_keywords', 'msdyn_languagelocaleid', 'msdyn_LanguageLocaleIdName', 'msdyn_name', 'msdyn_subjectid', 'msdyn_title', 'OwnerId'],
				header: [],
				tab: ['_92E59EE7_820A_42FC_907F_F86D2C4677C2____92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_1', '_92E59EE7_820A_42FC_907F_F86D2C4677C2____92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_2', '_92E59EE7_820A_42FC_907F_F86D2C4677C2___Content'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Aggregate Form: Form (contains all fields from all forms)
	// ========================================================================

	export namespace AllInOne {

		/**
		 * Aggregate Body controls interface
		 * Contains all controls from all forms on the entity
		 */
		export interface IBody {
			/** Shows the body of the article stored in HTML format. */
			msdyn_content: DevKit.Controls.ActionCards;
			/** Description */
			msdyn_Description: DevKit.Controls.String;
			/** Shows whether this article is only visible internally. */
			msdyn_isinternal: DevKit.Controls.Boolean;
			/** Keywords */
			msdyn_keywords: DevKit.Controls.Memo;
			/** Article Template Language Id */
			msdyn_languagelocaleid: DevKit.Controls.String;
			/** Article Language Name */
			msdyn_LanguageLocaleIdName: DevKit.Controls.String;
			/** Type a name for the Knowledge Article Template */
			msdyn_name: DevKit.Controls.String;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			msdyn_subjectid: DevKit.Controls.Lookup;
			/** Type a title for the Knowledge Article Template */
			msdyn_title: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
		}

		/**
		 * Aggregate QuickForm interface
		 */
		export interface IQuickForm {
		}

		/**
		 * Aggregate Process interface
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

	}

	/**
	 * Aggregate Form class
	 * Contains all fields from all forms - useful when form type is unknown at compile time
	 * Usage: new msdyn_knowledgearticletemplate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_knowledgearticletemplate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_content', 'msdyn_Description', 'msdyn_isinternal', 'msdyn_keywords', 'msdyn_languagelocaleid', 'msdyn_LanguageLocaleIdName', 'msdyn_name', 'msdyn_subjectid', 'msdyn_title', 'OwnerId'],
				header: [],
				tab: ['{92e59ee7-820a-42fc-907f-f86d2c4677c2}___{92e59ee7-820a-42fc-907f-f86d2c4677c2}_section_1', '{92e59ee7-820a-42fc-907f-f86d2c4677c2}___{92e59ee7-820a-42fc-907f-f86d2c4677c2}_section_2', '{92e59ee7-820a-42fc-907f-f86d2c4677c2}___Content'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
