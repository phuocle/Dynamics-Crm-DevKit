/**
 * KnowledgeBaseRecord.form.ts - KnowledgeBaseRecord Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace KnowledgeBaseRecord containing form classes: KnowledgeBaseRecord.FormClassName
 * 3. Aggregate Form class: KnowledgeBaseRecord.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace KnowledgeBaseRecord {

	// ========================================================================
	// Form: Knowledge_Base_Articles
	// ========================================================================

	export namespace Knowledge_Base_Articles {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			notescontrol: DevKit.Controls.Note;
			/** Shows the internal Parature service desk URL of the knowledge base records. */
			PrivateUrl: DevKit.Controls.String;
			/** Shows the public Parature portal URL of the knowledge base records. */
			PublicUrl: DevKit.Controls.String;
			/** Shows the title of the knowledge base (KB) Record. */
			Title: DevKit.Controls.String;
			/** Shows the unique ID of the linked knowledge base (KB) article. */
			UniqueId: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows the unique ID of the linked knowledge base (KB) article. */
			UniqueId: DevKit.Controls.String;
		}

		export interface ITabs {
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
	 * Knowledge_Base_Articles Form class
	 * Provides typed access to all form controls
	 * Usage: new KnowledgeBaseRecord.Knowledge_Base_Articles(executionContext)
	 */
	export class Knowledge_Base_Articles extends FormBase<Knowledge_Base_Articles.IBody, Knowledge_Base_Articles.IHeader, Knowledge_Base_Articles.IGrid, Knowledge_Base_Articles.INavigation, Knowledge_Base_Articles.IQuickForm, Knowledge_Base_Articles.IProcess, Knowledge_Base_Articles.IDialog> {
		/**
		 * Creates a Knowledge_Base_Articles Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['notescontrol', 'PrivateUrl', 'PublicUrl', 'Title', 'UniqueId'],
				header: ['UniqueId'],
				tab: [],
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
			notescontrol: DevKit.Controls.Note;
			/** Shows the internal Parature service desk URL of the knowledge base records. */
			PrivateUrl: DevKit.Controls.String;
			/** Shows the public Parature portal URL of the knowledge base records. */
			PublicUrl: DevKit.Controls.String;
			/** Shows the title of the knowledge base (KB) Record. */
			Title: DevKit.Controls.String;
			/** Shows the unique ID of the linked knowledge base (KB) article. */
			UniqueId: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows the unique ID of the linked knowledge base (KB) article. */
			UniqueId: DevKit.Controls.String;
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
	 * Usage: new KnowledgeBaseRecord.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate KnowledgeBaseRecord Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['notescontrol', 'PrivateUrl', 'PublicUrl', 'Title', 'UniqueId'],
				header: ['UniqueId'],
				tab: [],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
