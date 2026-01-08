/**
 * conversationtranscript.form.ts - conversationtranscript Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace conversationtranscript containing form classes: conversationtranscript.FormClassName
 * 3. Aggregate Form class: conversationtranscript.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace conversationtranscript {

	// ========================================================================
	// Form: conversationtranscript_Information
	// ========================================================================

	export namespace conversationtranscript_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Content of the conversation */
			Content: DevKit.Controls.Memo;
			/** The actual start time of the conversation (not the time it was written to the data store) */
			ConversationStartTime: DevKit.Controls.DateTime;
			/** Any metadata about the conversation being captured such as the schema version, state, agents, participants, etc if applicable. */
			metadata: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** This defines the type of schema used for the conversation based on format used by the application writing this conversation (PVA, Omni-Channel, OBI, etc) */
			SchemaType: DevKit.Controls.String;
			/** The version of the conversation transcript content schema that is used. */
			SchemaVersion: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
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
	 * conversationtranscript_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new conversationtranscript.conversationtranscript_Information(executionContext)
	 */
	export class conversationtranscript_Information extends FormBase<conversationtranscript_Information.IBody, conversationtranscript_Information.IHeader, conversationtranscript_Information.IGrid, conversationtranscript_Information.INavigation, conversationtranscript_Information.IQuickForm, conversationtranscript_Information.IProcess, conversationtranscript_Information.IDialog> {
		/**
		 * Creates a conversationtranscript_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Content', 'ConversationStartTime', 'metadata', 'name', 'OwnerId', 'SchemaType', 'SchemaVersion'],
				header: [],
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
			/** Content of the conversation */
			Content: DevKit.Controls.Memo;
			/** The actual start time of the conversation (not the time it was written to the data store) */
			ConversationStartTime: DevKit.Controls.DateTime;
			/** Any metadata about the conversation being captured such as the schema version, state, agents, participants, etc if applicable. */
			metadata: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** This defines the type of schema used for the conversation based on format used by the application writing this conversation (PVA, Omni-Channel, OBI, etc) */
			SchemaType: DevKit.Controls.String;
			/** The version of the conversation transcript content schema that is used. */
			SchemaVersion: DevKit.Controls.String;
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
	 * Usage: new conversationtranscript.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate conversationtranscript Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Content', 'ConversationStartTime', 'metadata', 'name', 'OwnerId', 'SchemaType', 'SchemaVersion'],
				header: [],
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
