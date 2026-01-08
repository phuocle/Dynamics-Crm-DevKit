/**
 * EmailSignature.form.ts - EmailSignature Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace EmailSignature containing form classes: EmailSignature.FormClassName
 * 3. Aggregate Form class: EmailSignature.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace EmailSignature {

	// ========================================================================
	// Form: Email_signature
	// ========================================================================

	export namespace Email_signature {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Information that specifies whether the email signature is default to the user. */
			IsDefault: DevKit.Controls.Boolean;
			/** Language of the email signature. */
			LanguageCode: DevKit.Controls.Integer;
			/** Language of the email signature. */
			LanguageCode1: DevKit.Controls.Integer;
			/** Unique identifier of the user or team who owns the email signature for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Safe html of email signature. */
			SafeHtml: DevKit.Controls.Memo;
			/** Title of the email signature. */
			Title: DevKit.Controls.String;
			/** Title of the email signature. */
			Title1: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the email signature for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
		}

		export interface IgeneralTabSections {
			/** Details */
			Details: DevKit.Controls.Section;
			/** Details */
			Details_UCI: DevKit.Controls.Section;
			/** Signature editor */
			Signature_Editor: DevKit.Controls.Section;
		}

		/** Signature */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
			/** Signature */
			general: IgeneralTab;
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
	 * Email_signature Form class
	 * Provides typed access to all form controls
	 * Usage: new EmailSignature.Email_signature(executionContext)
	 */
	export class Email_signature extends FormBase<Email_signature.IBody, Email_signature.IHeader, Email_signature.IGrid, Email_signature.INavigation, Email_signature.IQuickForm, Email_signature.IProcess, Email_signature.IDialog> {
		/**
		 * Creates a Email_signature Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['IsDefault', 'LanguageCode', 'LanguageCode1', 'OwnerId', 'SafeHtml', 'Title', 'Title1'],
				header: ['OwnerId'],
				tab: ['general___Details', 'general___Details_UCI', 'general___Signature_Editor'],
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
			/** Information that specifies whether the email signature is default to the user. */
			IsDefault: DevKit.Controls.Boolean;
			/** Language of the email signature. */
			LanguageCode: DevKit.Controls.Integer;
			/** Language of the email signature. */
			LanguageCode1: DevKit.Controls.Integer;
			/** Unique identifier of the user or team who owns the email signature for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Safe html of email signature. */
			SafeHtml: DevKit.Controls.Memo;
			/** Title of the email signature. */
			Title: DevKit.Controls.String;
			/** Title of the email signature. */
			Title1: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the email signature for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
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
	 * Usage: new EmailSignature.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate EmailSignature Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['IsDefault', 'LanguageCode', 'LanguageCode1', 'OwnerId', 'SafeHtml', 'Title', 'Title1'],
				header: ['OwnerId'],
				tab: ['general___Details', 'general___Details_UCI', 'general___Signature Editor'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
