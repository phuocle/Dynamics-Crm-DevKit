/**
 * AdvancedSimilarityRule.form.ts - AdvancedSimilarityRule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace AdvancedSimilarityRule containing form classes: AdvancedSimilarityRule.FormClassName
 * 3. Aggregate Form class: AdvancedSimilarityRule.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace AdvancedSimilarityRule {

	// ========================================================================
	// Form: AdvancedSimilarityRule_Information
	// ========================================================================

	export namespace AdvancedSimilarityRule_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Enter a description for the Advanced Similarity Rule */
			Description: DevKit.Controls.Memo;
			/** Filter Result By Status */
			FilterResultByStatus: DevKit.Controls.OptionSet;
			/** Use Text Analytics for Target Match */
			IsAzureMLRequired: DevKit.Controls.Boolean;
			/** Enter the maximum number of keywords and key phrases to use with text analytics. */
			MaxNumberKeyphrases: DevKit.Controls.Integer;
			/** Type a logical name for the similarity configuration */
			name: DevKit.Controls.String;
			/** Enter an entity that similar records will be suggested for */
			SourceEntity: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0TabSections {
			_0CBFC71F_6EFF_4583_9B38_7A9AE69C3AE1: DevKit.Controls.Section;
		}

		export interface I_67E8B341_A89A_4207_9BCC_4C1F9CC8B89DTabSections {
			_29B6CE18_08E1_4B87_B532_B18A6987BBB2: DevKit.Controls.Section;
			/** ADVANCED TEXT MATCH SETTINGS */
			_89397326_037F_4A43_B362_6B9B04E7917B: DevKit.Controls.Section;
		}

		/** Match Fields */
		export interface I_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0Tab extends DevKit.Controls.ITab {
			Section: I_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0TabSections;
		}

		/** Details */
		export interface I_67E8B341_A89A_4207_9BCC_4C1F9CC8B89DTab extends DevKit.Controls.ITab {
			Section: I_67E8B341_A89A_4207_9BCC_4C1F9CC8B89DTabSections;
		}

		export interface ITabs {
			/** Match Fields */
			_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0: I_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0Tab;
			/** Details */
			_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D: I_67E8B341_A89A_4207_9BCC_4C1F9CC8B89DTab;
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
	 * AdvancedSimilarityRule_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new AdvancedSimilarityRule.AdvancedSimilarityRule_Information(executionContext)
	 */
	export class AdvancedSimilarityRule_Information extends FormBase<AdvancedSimilarityRule_Information.IBody, AdvancedSimilarityRule_Information.IHeader, AdvancedSimilarityRule_Information.IGrid, AdvancedSimilarityRule_Information.INavigation, AdvancedSimilarityRule_Information.IQuickForm, AdvancedSimilarityRule_Information.IProcess, AdvancedSimilarityRule_Information.IDialog> {
		/**
		 * Creates a AdvancedSimilarityRule_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'FilterResultByStatus', 'IsAzureMLRequired', 'MaxNumberKeyphrases', 'name', 'SourceEntity'],
				header: [],
				tab: ['_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0____0CBFC71F_6EFF_4583_9B38_7A9AE69C3AE1', '_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D____29B6CE18_08E1_4B87_B532_B18A6987BBB2', '_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D____89397326_037F_4A43_B362_6B9B04E7917B'],
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
			/** Enter a description for the Advanced Similarity Rule */
			Description: DevKit.Controls.Memo;
			/** Filter Result By Status */
			FilterResultByStatus: DevKit.Controls.OptionSet;
			/** Use Text Analytics for Target Match */
			IsAzureMLRequired: DevKit.Controls.Boolean;
			/** Enter the maximum number of keywords and key phrases to use with text analytics. */
			MaxNumberKeyphrases: DevKit.Controls.Integer;
			/** Type a logical name for the similarity configuration */
			name: DevKit.Controls.String;
			/** Enter an entity that similar records will be suggested for */
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
	 * Usage: new AdvancedSimilarityRule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate AdvancedSimilarityRule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'FilterResultByStatus', 'IsAzureMLRequired', 'MaxNumberKeyphrases', 'name', 'SourceEntity'],
				header: [],
				tab: ['{3D17A623-BFEB-49F9-83C4-B5A02B96CAC0}___{0CBFC71F-6EFF-4583-9B38-7A9AE69C3AE1}', '{67e8b341-a89a-4207-9bcc-4c1f9cc8b89d}___{29B6CE18-08E1-4B87-B532-B18A6987BBB2}', '{67e8b341-a89a-4207-9bcc-4c1f9cc8b89d}___{89397326-037F-4A43-B362-6B9B04E7917B}'],
				grid: ['textanalyticsentitymappings'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
