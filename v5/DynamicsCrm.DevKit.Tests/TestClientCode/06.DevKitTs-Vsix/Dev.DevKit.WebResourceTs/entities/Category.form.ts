/**
 * Category.form.ts - Category Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Category containing form classes: Category.FormClassName
 * 3. Aggregate Form class: Category.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Category {

	// ========================================================================
	// Form: Category
	// ========================================================================

	export namespace Category {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the category number for customer reference. */
			CategoryNumber: DevKit.Controls.String;
			/** Type a detailed description of the category */
			Description: DevKit.Controls.Memo;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Type a title for the Category. */
			Title: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IAssociatedCategoriesTabSections {
			Associated_Categories: DevKit.Controls.Section;
		}

		/** Associated Categories */
		export interface IAssociatedCategoriesTab extends DevKit.Controls.ITab {
			Section: IAssociatedCategoriesTabSections;
		}

		export interface ITabs {
			/** Associated Categories */
			AssociatedCategories: IAssociatedCategoriesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Child Categories */
			AssociatedCategoriesGrid: DevKit.Controls.Grid;
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
	 * Category Form class
	 * Provides typed access to all form controls
	 * Usage: new Category.Category(executionContext)
	 */
	export class Category extends FormBase<Category.IBody, Category.IHeader, Category.IGrid, Category.INavigation, Category.IQuickForm, Category.IProcess, Category.IDialog> {
		/**
		 * Creates a Category Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CategoryNumber', 'Description', 'ParentCategoryId', 'SequenceNumber', 'Title'],
				header: [],
				tab: ['AssociatedCategories___Associated_Categories'],
				grid: ['AssociatedCategoriesGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Category_Main_Interactive
	// ========================================================================

	export namespace Category_Main_Interactive {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type a detailed description of the category */
			Description: DevKit.Controls.Memo;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Type a title for the Category. */
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
	 * Category_Main_Interactive Form class
	 * Provides typed access to all form controls
	 * Usage: new Category.Category_Main_Interactive(executionContext)
	 */
	export class Category_Main_Interactive extends FormBase<Category_Main_Interactive.IBody, Category_Main_Interactive.IHeader, Category_Main_Interactive.IGrid, Category_Main_Interactive.INavigation, Category_Main_Interactive.IQuickForm, Category_Main_Interactive.IProcess, Category_Main_Interactive.IDialog> {
		/**
		 * Creates a Category_Main_Interactive Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'ParentCategoryId', 'SequenceNumber', 'Title'],
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
	// Form: Category_Quick_Create
	// ========================================================================

	export namespace Category_Quick_Create {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the category number for customer reference. */
			CategoryNumber: DevKit.Controls.String;
			/** Type a detailed description of the category */
			Description: DevKit.Controls.Memo;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Type a title for the Category. */
			Title: DevKit.Controls.String;
			/** Form Tabs */
			Tab: ITabs;
		}

		export interface Itab_1TabSections {
			/** Details */
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}

		/** Tab */
		export interface Itab_1Tab extends DevKit.Controls.ITab {
			Section: Itab_1TabSections;
		}

		export interface ITabs {
			/** Tab */
			tab_1: Itab_1Tab;
		}

	}

	/**
	 * Category_Quick_Create Form class
	 * Provides typed access to all form controls
	 * Usage: new Category.Category_Quick_Create(executionContext)
	 */
	export class Category_Quick_Create extends FormBase<Category_Quick_Create.IBody, undefined, undefined, undefined, undefined, undefined, undefined> {
		/**
		 * Creates a Category_Quick_Create Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CategoryNumber', 'Description', 'ParentCategoryId', 'SequenceNumber', 'Title'],
				header: [],
				tab: ['tab_1___tab_1_column_1_section_1'],
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
			/** Shows the category number for customer reference. */
			CategoryNumber: DevKit.Controls.String;
			/** Type a detailed description of the category */
			Description: DevKit.Controls.Memo;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Type a title for the Category. */
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
			/** Child Categories */
			AssociatedCategoriesGrid: DevKit.Controls.Grid;
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
	 * Usage: new Category.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Category Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CategoryNumber', 'Description', 'ParentCategoryId', 'SequenceNumber', 'Title'],
				header: [],
				tab: ['AssociatedCategories___Associated Categories'],
				grid: ['AssociatedCategoriesGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
