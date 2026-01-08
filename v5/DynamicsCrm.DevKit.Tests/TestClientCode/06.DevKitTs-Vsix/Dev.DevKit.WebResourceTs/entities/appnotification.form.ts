/**
 * appnotification.form.ts - appnotification Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace appnotification containing form classes: appnotification.FormClassName
 * 3. Aggregate Form class: appnotification.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace appnotification {

	// ========================================================================
	// Form: appnotification_Information
	// ========================================================================

	export namespace appnotification_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Body of the notification */
			Body: DevKit.Controls.String;
			/** Custom data for the notification that can be used by the notification card */
			Data: DevKit.Controls.Memo;
			/** IconType */
			IconType: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the notification */
			Priority: DevKit.Controls.OptionSet;
			/** Title for the notification */
			Title: DevKit.Controls.String;
			/** Type of toast behavior for the notification */
			ToastType: DevKit.Controls.OptionSet;
			/** After the specified number of seconds the notification will be deleted */
			TTLInSeconds: DevKit.Controls.Integer;
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
	 * appnotification_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new appnotification.appnotification_Information(executionContext)
	 */
	export class appnotification_Information extends FormBase<appnotification_Information.IBody, appnotification_Information.IHeader, appnotification_Information.IGrid, appnotification_Information.INavigation, appnotification_Information.IQuickForm, appnotification_Information.IProcess, appnotification_Information.IDialog> {
		/**
		 * Creates a appnotification_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Body', 'Data', 'IconType', 'OwnerId', 'Priority', 'Title', 'ToastType', 'TTLInSeconds'],
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
			/** Body of the notification */
			Body: DevKit.Controls.String;
			/** Custom data for the notification that can be used by the notification card */
			Data: DevKit.Controls.Memo;
			/** IconType */
			IconType: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the notification */
			Priority: DevKit.Controls.OptionSet;
			/** Title for the notification */
			Title: DevKit.Controls.String;
			/** Type of toast behavior for the notification */
			ToastType: DevKit.Controls.OptionSet;
			/** After the specified number of seconds the notification will be deleted */
			TTLInSeconds: DevKit.Controls.Integer;
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
	 * Usage: new appnotification.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate appnotification Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Body', 'Data', 'IconType', 'OwnerId', 'Priority', 'Title', 'ToastType', 'TTLInSeconds'],
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
