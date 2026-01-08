/**
 * SLA.form.ts - SLA Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SLA containing form classes: SLA.FormClassName
 * 3. Aggregate Form class: SLA.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SLA {

	// ========================================================================
	// Form: SLA
	// ========================================================================

	export namespace SLA {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			AllowPauseResume: DevKit.Controls.Boolean;
			/** Select the field that specifies the date and time from which the SLA items will be calculated. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created. */
			ApplicableFromPickList: DevKit.Controls.OptionSet;
			/** Choose the business hours for calculating SLA item timelines. */
			BusinessHoursId: DevKit.Controls.Lookup;
			/** Type additional information to describe the SLA */
			Description: DevKit.Controls.String;
			/** Type additional information to describe the SLA */
			Description1: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA). */
			Name: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA). */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the entity type that the SLA is defined. */
			ObjectTypeCode: DevKit.Controls.OptionSet;
			/** Shows the primary entity that the SLA has been created for. */
			PrimaryEntityOTC: DevKit.Controls.Integer;
			/** Select the type of service level agreement (SLA). */
			SLAType: DevKit.Controls.OptionSet;
			/** Record version */
			slaversion: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team who owns the SLA. This field is updated every time the item is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the status of the service level agreement (SLA). */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface ItabUCTabSections {
			/** SLA Items */
			sladetails: DevKit.Controls.Section;
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
		}

		/** General */
		export interface ItabUCTab extends DevKit.Controls.ITab {
			Section: ItabUCTabSections;
		}

		export interface ITabs {
			/** General */
			tabUC: ItabUCTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** SLA Items */
			SLADetails: DevKit.Controls.Grid;
			/** SLA Items */
			SLAItemsUCI: DevKit.Controls.Grid;
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
	 * SLA Form class
	 * Provides typed access to all form controls
	 * Usage: new SLA.SLA(executionContext)
	 */
	export class SLA extends FormBase<SLA.IBody, SLA.IHeader, SLA.IGrid, SLA.INavigation, SLA.IQuickForm, SLA.IProcess, SLA.IDialog> {
		/**
		 * Creates a SLA Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AllowPauseResume', 'ApplicableFromPickList', 'BusinessHoursId', 'Description', 'Description1', 'Name', 'Name1', 'notescontrol', 'ObjectTypeCode', 'PrimaryEntityOTC', 'SLAType', 'slaversion'],
				header: ['OwnerId', 'StatusCode'],
				tab: ['tabUC___sladetails', 'tabUC___tab_2_section_1'],
				grid: ['SLADetails', 'SLAItemsUCI'],
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
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			AllowPauseResume: DevKit.Controls.Boolean;
			/** Select the field that specifies the date and time from which the SLA items will be calculated. For example, if you select the Case Created On field, SLA calculation will begin from the time the case is created. */
			ApplicableFromPickList: DevKit.Controls.OptionSet;
			/** Choose the business hours for calculating SLA item timelines. */
			BusinessHoursId: DevKit.Controls.Lookup;
			/** Type additional information to describe the SLA */
			Description: DevKit.Controls.String;
			/** Type additional information to describe the SLA */
			Description1: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA). */
			Name: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA). */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the entity type that the SLA is defined. */
			ObjectTypeCode: DevKit.Controls.OptionSet;
			/** Shows the primary entity that the SLA has been created for. */
			PrimaryEntityOTC: DevKit.Controls.Integer;
			/** Select the type of service level agreement (SLA). */
			SLAType: DevKit.Controls.OptionSet;
			/** Record version */
			slaversion: DevKit.Controls.OptionSet;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team who owns the SLA. This field is updated every time the item is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the status of the service level agreement (SLA). */
			StatusCode: DevKit.Controls.OptionSet;
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** SLA Items */
			SLADetails: DevKit.Controls.Grid;
			/** SLA Items */
			SLAItemsUCI: DevKit.Controls.Grid;
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
	 * Usage: new SLA.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SLA Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AllowPauseResume', 'ApplicableFromPickList', 'BusinessHoursId', 'Description', 'Description1', 'Name', 'Name1', 'notescontrol', 'ObjectTypeCode', 'PrimaryEntityOTC', 'SLAType', 'slaversion'],
				header: ['OwnerId', 'StatusCode'],
				tab: ['tabUC___sladetails', 'tabUC___tab_2_section_1'],
				grid: ['SLADetails', 'SLAItemsUCI'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
