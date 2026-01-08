/**
 * ChannelPropertyGroup.form.ts - ChannelPropertyGroup Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ChannelPropertyGroup containing form classes: ChannelPropertyGroup.FormClassName
 * 3. Aggregate Form class: ChannelPropertyGroup.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ChannelPropertyGroup {

	// ========================================================================
	// Form: Channel_Property_Group
	// ========================================================================

	export namespace Channel_Property_Group {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type the name of the channel property group. */
			Name: DevKit.Controls.String;
			/** Select the activity that the property group is associated with. */
			RegardingTypeCode: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Iproperty_bag_summaryTabSections {
			property_bag_items_1: DevKit.Controls.Section;
			property_bag_properties_1: DevKit.Controls.Section;
		}

		export interface Iproperty_bag_summaryTab extends DevKit.Controls.ITab {
			Section: Iproperty_bag_summaryTabSections;
		}

		export interface ITabs {
			property_bag_summary: Iproperty_bag_summaryTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Channel Properties */
			propertiesGrid: DevKit.Controls.Grid;
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
	 * Channel_Property_Group Form class
	 * Provides typed access to all form controls
	 * Usage: new ChannelPropertyGroup.Channel_Property_Group(executionContext)
	 */
	export class Channel_Property_Group extends FormBase<Channel_Property_Group.IBody, Channel_Property_Group.IHeader, Channel_Property_Group.IGrid, Channel_Property_Group.INavigation, Channel_Property_Group.IQuickForm, Channel_Property_Group.IProcess, Channel_Property_Group.IDialog> {
		/**
		 * Creates a Channel_Property_Group Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'Name', 'RegardingTypeCode'],
				header: [],
				tab: ['property_bag_summary___property_bag_items_1', 'property_bag_summary___property_bag_properties_1'],
				grid: ['propertiesGrid'],
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
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type the name of the channel property group. */
			Name: DevKit.Controls.String;
			/** Select the activity that the property group is associated with. */
			RegardingTypeCode: DevKit.Controls.OptionSet;
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
			/** Channel Properties */
			propertiesGrid: DevKit.Controls.Grid;
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
	 * Usage: new ChannelPropertyGroup.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ChannelPropertyGroup Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedOn', 'Name', 'RegardingTypeCode'],
				header: [],
				tab: ['property_bag_summary___property_bag_items_1', 'property_bag_summary___property_bag_properties_1'],
				grid: ['propertiesGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
