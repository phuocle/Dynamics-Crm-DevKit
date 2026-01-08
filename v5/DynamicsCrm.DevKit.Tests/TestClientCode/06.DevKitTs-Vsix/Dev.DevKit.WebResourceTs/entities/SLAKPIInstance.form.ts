/**
 * SLAKPIInstance.form.ts - SLAKPIInstance Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SLAKPIInstance containing form classes: SLAKPIInstance.FormClassName
 * 3. Aggregate Form class: SLAKPIInstance.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SLAKPIInstance {

	// ========================================================================
	// Form: SLA_KPI_Instance
	// ========================================================================

	export namespace SLA_KPI_Instance {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
			FailureTime: DevKit.Controls.DateTime;
			/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
			Regarding: DevKit.Controls.Lookup;
			/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
			SucceededOn: DevKit.Controls.DateTime;
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
			WarningTime: DevKit.Controls.DateTime;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
			Status: DevKit.Controls.OptionSet;
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
	 * SLA_KPI_Instance Form class
	 * Provides typed access to all form controls
	 * Usage: new SLAKPIInstance.SLA_KPI_Instance(executionContext)
	 */
	export class SLA_KPI_Instance extends FormBase<SLA_KPI_Instance.IBody, SLA_KPI_Instance.IHeader, SLA_KPI_Instance.IGrid, SLA_KPI_Instance.INavigation, SLA_KPI_Instance.IQuickForm, SLA_KPI_Instance.IProcess, SLA_KPI_Instance.IDialog> {
		/**
		 * Creates a SLA_KPI_Instance Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['FailureTime', 'Name', 'Regarding', 'SucceededOn', 'WarningTime'],
				header: ['OwnerId', 'Status'],
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
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
			FailureTime: DevKit.Controls.DateTime;
			/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
			Regarding: DevKit.Controls.Lookup;
			/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
			SucceededOn: DevKit.Controls.DateTime;
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
			WarningTime: DevKit.Controls.DateTime;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
			Status: DevKit.Controls.OptionSet;
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
	 * Usage: new SLAKPIInstance.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SLAKPIInstance Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['FailureTime', 'Name', 'Regarding', 'SucceededOn', 'WarningTime'],
				header: ['OwnerId', 'Status'],
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
