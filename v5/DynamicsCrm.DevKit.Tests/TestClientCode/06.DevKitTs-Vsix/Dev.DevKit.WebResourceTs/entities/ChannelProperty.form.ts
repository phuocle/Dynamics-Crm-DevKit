/**
 * ChannelProperty.form.ts - ChannelProperty Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ChannelProperty containing form classes: ChannelProperty.FormClassName
 * 3. Aggregate Form class: ChannelProperty.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ChannelProperty {

	// ========================================================================
	// Form: Channel_Property
	// ========================================================================

	export namespace Channel_Property {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the name of the application that the property is associated with. */
			Applicationsource: DevKit.Controls.String;
			/** Enter the data type for the property. */
			DataType: DevKit.Controls.OptionSet;
			/** Description of property */
			Description: DevKit.Controls.String;
			/** Type the name of the property as received in the information provided by the external application. */
			Name: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Channel Property Information */
			channelpropertyinformation: DevKit.Controls.Section;
		}

		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
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
	 * Channel_Property Form class
	 * Provides typed access to all form controls
	 * Usage: new ChannelProperty.Channel_Property(executionContext)
	 */
	export class Channel_Property extends FormBase<Channel_Property.IBody, Channel_Property.IHeader, Channel_Property.IGrid, Channel_Property.INavigation, Channel_Property.IQuickForm, Channel_Property.IProcess, Channel_Property.IDialog> {
		/**
		 * Creates a Channel_Property Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Applicationsource', 'DataType', 'Description', 'Name'],
				header: [],
				tab: ['general___channelpropertyinformation'],
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
			/** Type the name of the application that the property is associated with. */
			Applicationsource: DevKit.Controls.String;
			/** Enter the data type for the property. */
			DataType: DevKit.Controls.OptionSet;
			/** Description of property */
			Description: DevKit.Controls.String;
			/** Type the name of the property as received in the information provided by the external application. */
			Name: DevKit.Controls.String;
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
	 * Usage: new ChannelProperty.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ChannelProperty Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Applicationsource', 'DataType', 'Description', 'Name'],
				header: [],
				tab: ['general___channelpropertyinformation'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
