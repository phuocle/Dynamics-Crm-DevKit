/**
 * KnowledgeSourceProfile.form.ts - KnowledgeSourceProfile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace KnowledgeSourceProfile containing form classes: KnowledgeSourceProfile.FormClassName
 * 3. Aggregate Form class: KnowledgeSourceProfile.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace KnowledgeSourceProfile {

	// ========================================================================
	// Form: KnowledgeSourceProfile_Information
	// ========================================================================

	export namespace KnowledgeSourceProfile_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description */
			Description: DevKit.Controls.String;
			/** Display Name */
			DisplayName: DevKit.Controls.String;
			/** Hints */
			Hints: DevKit.Controls.Memo;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Source Type */
			SourceType: DevKit.Controls.String;
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
	 * KnowledgeSourceProfile_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new KnowledgeSourceProfile.KnowledgeSourceProfile_Information(executionContext)
	 */
	export class KnowledgeSourceProfile_Information extends FormBase<KnowledgeSourceProfile_Information.IBody, KnowledgeSourceProfile_Information.IHeader, KnowledgeSourceProfile_Information.IGrid, KnowledgeSourceProfile_Information.INavigation, KnowledgeSourceProfile_Information.IQuickForm, KnowledgeSourceProfile_Information.IProcess, KnowledgeSourceProfile_Information.IDialog> {
		/**
		 * Creates a KnowledgeSourceProfile_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'DisplayName', 'Hints', 'OwnerId', 'SourceType'],
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
			/** Description */
			Description: DevKit.Controls.String;
			/** Display Name */
			DisplayName: DevKit.Controls.String;
			/** Hints */
			Hints: DevKit.Controls.Memo;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Source Type */
			SourceType: DevKit.Controls.String;
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
	 * Usage: new KnowledgeSourceProfile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate KnowledgeSourceProfile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'DisplayName', 'Hints', 'OwnerId', 'SourceType'],
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
