/**
 * ChannelAccessProfileRule.form.ts - ChannelAccessProfileRule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ChannelAccessProfileRule containing form classes: ChannelAccessProfileRule.FormClassName
 * 3. Aggregate Form class: ChannelAccessProfileRule.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ChannelAccessProfileRule {

	// ========================================================================
	// Form: ChannelAccessProfileRule_Information
	// ========================================================================

	export namespace ChannelAccessProfileRule_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type a short description for the channel access profile rule. */
			Description: DevKit.Controls.Memo;
			/** Type a descriptive name for the channel access profile rule. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team that owns the channel access profile rule. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the channel access profile rule's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface ITabs {
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Channel Access Profile Rule Items */
			ProfileRuleItems: DevKit.Controls.Grid;
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
	 * ChannelAccessProfileRule_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new ChannelAccessProfileRule.ChannelAccessProfileRule_Information(executionContext)
	 */
	export class ChannelAccessProfileRule_Information extends FormBase<ChannelAccessProfileRule_Information.IBody, ChannelAccessProfileRule_Information.IHeader, ChannelAccessProfileRule_Information.IGrid, ChannelAccessProfileRule_Information.INavigation, ChannelAccessProfileRule_Information.IQuickForm, ChannelAccessProfileRule_Information.IProcess, ChannelAccessProfileRule_Information.IDialog> {
		/**
		 * Creates a ChannelAccessProfileRule_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name', 'notescontrol'],
				header: ['OwnerId', 'StatusCode'],
				tab: [],
				grid: ['ProfileRuleItems'],
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
			/** Type a short description for the channel access profile rule. */
			Description: DevKit.Controls.Memo;
			/** Type a descriptive name for the channel access profile rule. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team that owns the channel access profile rule. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the channel access profile rule's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** Channel Access Profile Rule Items */
			ProfileRuleItems: DevKit.Controls.Grid;
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
	 * Usage: new ChannelAccessProfileRule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ChannelAccessProfileRule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name', 'notescontrol'],
				header: ['OwnerId', 'StatusCode'],
				tab: [],
				grid: ['ProfileRuleItems'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
