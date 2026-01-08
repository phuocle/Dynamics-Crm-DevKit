/**
 * PowerPagesDDOSAlert.form.ts - PowerPagesDDOSAlert Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace PowerPagesDDOSAlert containing form classes: PowerPagesDDOSAlert.FormClassName
 * 3. Aggregate Form class: PowerPagesDDOSAlert.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace PowerPagesDDOSAlert {

	// ========================================================================
	// Form: PowerPagesDDOSAlert_Information
	// ========================================================================

	export namespace PowerPagesDDOSAlert_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** AdditionalData */
			AdditionalData: DevKit.Controls.Memo;
			/** AttackType */
			AttackType: DevKit.Controls.String;
			/** Description */
			Description: DevKit.Controls.Memo;
			/** FirstActivityTime */
			FirstActivityTime: DevKit.Controls.DateTime;
			/** HostName */
			HostName: DevKit.Controls.String;
			/** LastActivityTime */
			LastActivityTime: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** PortalId */
			PortalId: DevKit.Controls.String;
			/** RecordType */
			RecordType: DevKit.Controls.String;
			/** Severity */
			Severity: DevKit.Controls.String;
			/** TimeGenerated */
			TimeGenerated: DevKit.Controls.DateTime;
			/** Title */
			Title: DevKit.Controls.String;
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
	 * PowerPagesDDOSAlert_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new PowerPagesDDOSAlert.PowerPagesDDOSAlert_Information(executionContext)
	 */
	export class PowerPagesDDOSAlert_Information extends FormBase<PowerPagesDDOSAlert_Information.IBody, PowerPagesDDOSAlert_Information.IHeader, PowerPagesDDOSAlert_Information.IGrid, PowerPagesDDOSAlert_Information.INavigation, PowerPagesDDOSAlert_Information.IQuickForm, PowerPagesDDOSAlert_Information.IProcess, PowerPagesDDOSAlert_Information.IDialog> {
		/**
		 * Creates a PowerPagesDDOSAlert_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AdditionalData', 'AttackType', 'Description', 'FirstActivityTime', 'HostName', 'LastActivityTime', 'OwnerId', 'PortalId', 'RecordType', 'Severity', 'TimeGenerated', 'Title'],
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
			/** AdditionalData */
			AdditionalData: DevKit.Controls.Memo;
			/** AttackType */
			AttackType: DevKit.Controls.String;
			/** Description */
			Description: DevKit.Controls.Memo;
			/** FirstActivityTime */
			FirstActivityTime: DevKit.Controls.DateTime;
			/** HostName */
			HostName: DevKit.Controls.String;
			/** LastActivityTime */
			LastActivityTime: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** PortalId */
			PortalId: DevKit.Controls.String;
			/** RecordType */
			RecordType: DevKit.Controls.String;
			/** Severity */
			Severity: DevKit.Controls.String;
			/** TimeGenerated */
			TimeGenerated: DevKit.Controls.DateTime;
			/** Title */
			Title: DevKit.Controls.String;
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
	 * Usage: new PowerPagesDDOSAlert.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate PowerPagesDDOSAlert Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AdditionalData', 'AttackType', 'Description', 'FirstActivityTime', 'HostName', 'LastActivityTime', 'OwnerId', 'PortalId', 'RecordType', 'Severity', 'TimeGenerated', 'Title'],
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
