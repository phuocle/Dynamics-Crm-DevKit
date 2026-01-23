/**
 * Theme.form.ts - Theme Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Theme containing form classes: Theme.FormClassName
 * 3. Aggregate Form class: Theme.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Theme {

	// ========================================================================
	// Form: Theme
	// ========================================================================

	export namespace Theme {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Choose the Unified Interface secondary theme color to be used on the process control */
			AccentColor: DevKit.Controls.String;
			/** For internal use only. */
			BackgroundColor: DevKit.Controls.String;
			/** Choose the color that controls will use for borders */
			ControlBorder: DevKit.Controls.String;
			/** Choose the background color for controls to use to indicate when you hover over items */
			ControlShade: DevKit.Controls.String;
			/** Choose the default custom entity color if no color is assigned */
			DefaultCustomEntityColor: DevKit.Controls.String;
			/** Choose the default color for system entities if no color is assigned */
			DefaultEntityColor: DevKit.Controls.String;
			/** Choose the color for all links, such as e-mail address and lookup links, and for all buttons that are in focus */
			GlobalLinkColor: DevKit.Controls.String;
			/** Choose the color for title text, such as form tab labels */
			HeaderColor: DevKit.Controls.String;
			/** Choose the color that commands or lists will use to indicate hovered over items */
			HoverLinkEffect: DevKit.Controls.String;
			/** Upload a web resource to use as a logo. Recommended dimensions are a height of 50 pixels and a maximum width of 400 pixels. */
			LogoId: DevKit.Controls.Lookup;
			/** Enter text that will be used as the tooltip and alt text for the logo. */
			LogoToolTip: DevKit.Controls.String;
			/** Choose the Unified Interface primary theme color to be used on main command bar, buttons and tabs */
			MainColor: DevKit.Controls.String;
			/** The name of the Theme Entity. */
			Name: DevKit.Controls.String;
			/** Choose the primary Navigation Bar background color */
			NavBarBackgroundColor: DevKit.Controls.String;
			/** Choose the secondary Navigation Bar background color */
			NavBarShelfColor: DevKit.Controls.String;
			/** Choose the page header background color */
			PageHeaderBackgroundColor: DevKit.Controls.String;
			/** Choose the panel header background color */
			PanelHeaderBackgroundColor: DevKit.Controls.String;
			/** Choose the primary background color for process controls */
			ProcessControlColor: DevKit.Controls.String;
			/** Choose the color that commands or lists will use to indicate selected items */
			SelectedLinkEffect: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Theme Name */
			theme_information: DevKit.Controls.Section;
			/** Navigation Bar */
			theme_navigation: DevKit.Controls.Section;
			/** UI Elements */
			theme_ui_elements: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
			/** General */
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
	 * Theme Form class
	 * Provides typed access to all form controls
	 * Usage: new Theme.Theme(executionContext)
	 */
	export class Theme extends FormBase<Theme.IBody, Theme.IHeader, Theme.IGrid, Theme.INavigation, Theme.IQuickForm, Theme.IProcess, Theme.IDialog> {
		/**
		 * Creates a Theme Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AccentColor', 'BackgroundColor', 'ControlBorder', 'ControlShade', 'DefaultCustomEntityColor', 'DefaultEntityColor', 'GlobalLinkColor', 'HeaderColor', 'HoverLinkEffect', 'LogoId', 'LogoToolTip', 'MainColor', 'Name', 'NavBarBackgroundColor', 'NavBarShelfColor', 'PageHeaderBackgroundColor', 'PanelHeaderBackgroundColor', 'ProcessControlColor', 'SelectedLinkEffect'],
				header: [],
				tab: ['general___theme_information', 'general___theme_navigation', 'general___theme_ui_elements'],
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
			/** Choose the Unified Interface secondary theme color to be used on the process control */
			AccentColor: DevKit.Controls.String;
			/** For internal use only. */
			BackgroundColor: DevKit.Controls.String;
			/** Choose the color that controls will use for borders */
			ControlBorder: DevKit.Controls.String;
			/** Choose the background color for controls to use to indicate when you hover over items */
			ControlShade: DevKit.Controls.String;
			/** Choose the default custom entity color if no color is assigned */
			DefaultCustomEntityColor: DevKit.Controls.String;
			/** Choose the default color for system entities if no color is assigned */
			DefaultEntityColor: DevKit.Controls.String;
			/** Choose the color for all links, such as e-mail address and lookup links, and for all buttons that are in focus */
			GlobalLinkColor: DevKit.Controls.String;
			/** Choose the color for title text, such as form tab labels */
			HeaderColor: DevKit.Controls.String;
			/** Choose the color that commands or lists will use to indicate hovered over items */
			HoverLinkEffect: DevKit.Controls.String;
			/** Upload a web resource to use as a logo. Recommended dimensions are a height of 50 pixels and a maximum width of 400 pixels. */
			LogoId: DevKit.Controls.Lookup;
			/** Enter text that will be used as the tooltip and alt text for the logo. */
			LogoToolTip: DevKit.Controls.String;
			/** Choose the Unified Interface primary theme color to be used on main command bar, buttons and tabs */
			MainColor: DevKit.Controls.String;
			/** The name of the Theme Entity. */
			Name: DevKit.Controls.String;
			/** Choose the primary Navigation Bar background color */
			NavBarBackgroundColor: DevKit.Controls.String;
			/** Choose the secondary Navigation Bar background color */
			NavBarShelfColor: DevKit.Controls.String;
			/** Choose the page header background color */
			PageHeaderBackgroundColor: DevKit.Controls.String;
			/** Choose the panel header background color */
			PanelHeaderBackgroundColor: DevKit.Controls.String;
			/** Choose the primary background color for process controls */
			ProcessControlColor: DevKit.Controls.String;
			/** Choose the color that commands or lists will use to indicate selected items */
			SelectedLinkEffect: DevKit.Controls.String;
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
	 * Usage: new Theme.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Theme Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AccentColor', 'BackgroundColor', 'ControlBorder', 'ControlShade', 'DefaultCustomEntityColor', 'DefaultEntityColor', 'GlobalLinkColor', 'HeaderColor', 'HoverLinkEffect', 'LogoId', 'LogoToolTip', 'MainColor', 'Name', 'NavBarBackgroundColor', 'NavBarShelfColor', 'PageHeaderBackgroundColor', 'PanelHeaderBackgroundColor', 'ProcessControlColor', 'SelectedLinkEffect'],
				header: [],
				tab: ['general___theme information', 'general___theme navigation', 'general___theme ui elements'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
