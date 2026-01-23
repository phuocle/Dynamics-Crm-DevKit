/**
 * KnowledgeSearchModel.form.ts - KnowledgeSearchModel Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace KnowledgeSearchModel containing form classes: KnowledgeSearchModel.FormClassName
 * 3. Aggregate Form class: KnowledgeSearchModel.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace KnowledgeSearchModel {

	// ========================================================================
	// Form: KnowledgeSearchModel_Information
	// ========================================================================

	export namespace KnowledgeSearchModel_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Enter a description for the search configuration */
			Description: DevKit.Controls.Memo;
			/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
			MaxKeyWords: DevKit.Controls.Integer;
			/** Type a logical name for the search configuration. */
			Name: DevKit.Controls.String;
			/** Enter an entity that articles are suggested for. */
			SourceEntity: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_6A04C119_906C_4D8D_84D6_A470E79CBFCCTabSections {
			_87C466A2_37F3_4CDE_A484_C6C75EFF544D: DevKit.Controls.Section;
		}

		/** Keyword or Key Phrase Determination Fields */
		export interface I_6A04C119_906C_4D8D_84D6_A470E79CBFCCTab extends DevKit.Controls.ITab {
			Section: I_6A04C119_906C_4D8D_84D6_A470E79CBFCCTabSections;
		}

		export interface ITabs {
			/** Keyword or Key Phrase Determination Fields */
			_6A04C119_906C_4D8D_84D6_A470E79CBFCC: I_6A04C119_906C_4D8D_84D6_A470E79CBFCCTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Text Analytics Entity Mappings */
			textanalyticsentitymappings: DevKit.Controls.Grid;
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
	 * KnowledgeSearchModel_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new KnowledgeSearchModel.KnowledgeSearchModel_Information(executionContext)
	 */
	export class KnowledgeSearchModel_Information extends FormBase<KnowledgeSearchModel_Information.IBody, KnowledgeSearchModel_Information.IHeader, KnowledgeSearchModel_Information.IGrid, KnowledgeSearchModel_Information.INavigation, KnowledgeSearchModel_Information.IQuickForm, KnowledgeSearchModel_Information.IProcess, KnowledgeSearchModel_Information.IDialog> {
		/**
		 * Creates a KnowledgeSearchModel_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'MaxKeyWords', 'Name', 'SourceEntity'],
				header: [],
				tab: ['_6A04C119_906C_4D8D_84D6_A470E79CBFCC____87C466A2_37F3_4CDE_A484_C6C75EFF544D'],
				grid: ['textanalyticsentitymappings'],
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
			/** Enter a description for the search configuration */
			Description: DevKit.Controls.Memo;
			/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
			MaxKeyWords: DevKit.Controls.Integer;
			/** Type a logical name for the search configuration. */
			Name: DevKit.Controls.String;
			/** Enter an entity that articles are suggested for. */
			SourceEntity: DevKit.Controls.String;
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
			/** Text Analytics Entity Mappings */
			textanalyticsentitymappings: DevKit.Controls.Grid;
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
	 * Usage: new KnowledgeSearchModel.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate KnowledgeSearchModel Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'MaxKeyWords', 'Name', 'SourceEntity'],
				header: [],
				tab: ['{6a04c119-906c-4d8d-84d6-a470e79cbfcc}___{87c466a2-37f3-4cde-a484-c6c75eff544d}'],
				grid: ['textanalyticsentitymappings'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
