/**
 * card.form.ts - card Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace card containing form classes: card.FormClassName
 * 3. Aggregate Form class: card.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace card {

	// ========================================================================
	// Form: card_Information
	// ========================================================================

	export namespace card_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** AppDefinition */
			AppDefinition: DevKit.Controls.Memo;
			/** Description */
			Description: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** PublishDate */
			PublishDate: DevKit.Controls.DateTime;
			/** PublishSourceId */
			PublishSourceId: DevKit.Controls.String;
			/** RemixSourceId */
			RemixSourceId: DevKit.Controls.String;
			/** SchemaVersion */
			SchemaVersion: DevKit.Controls.String;
			/** Sizes */
			Sizes: DevKit.Controls.MultiOptionSet;
			/** Tags */
			Tags: DevKit.Controls.String;
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
	 * card_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new card.card_Information(executionContext)
	 */
	export class card_Information extends FormBase<card_Information.IBody, card_Information.IHeader, card_Information.IGrid, card_Information.INavigation, card_Information.IQuickForm, card_Information.IProcess, card_Information.IDialog> {
		/**
		 * Creates a card_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AppDefinition', 'Description', 'name', 'OwnerId', 'PublishDate', 'PublishSourceId', 'RemixSourceId', 'SchemaVersion', 'Sizes', 'Tags'],
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
			/** AppDefinition */
			AppDefinition: DevKit.Controls.Memo;
			/** Description */
			Description: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** PublishDate */
			PublishDate: DevKit.Controls.DateTime;
			/** PublishSourceId */
			PublishSourceId: DevKit.Controls.String;
			/** RemixSourceId */
			RemixSourceId: DevKit.Controls.String;
			/** SchemaVersion */
			SchemaVersion: DevKit.Controls.String;
			/** Sizes */
			Sizes: DevKit.Controls.MultiOptionSet;
			/** Tags */
			Tags: DevKit.Controls.String;
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
	 * Usage: new card.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate card Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AppDefinition', 'Description', 'name', 'OwnerId', 'PublishDate', 'PublishSourceId', 'RemixSourceId', 'SchemaVersion', 'Sizes', 'Tags'],
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
