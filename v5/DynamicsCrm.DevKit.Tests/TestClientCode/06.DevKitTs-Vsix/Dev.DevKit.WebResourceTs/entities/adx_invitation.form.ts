/**
 * adx_invitation.form.ts - adx_invitation Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace adx_invitation containing form classes: adx_invitation.FormClassName
 * 3. Aggregate Form class: adx_invitation.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace adx_invitation {

	// ========================================================================
	// Form: Information_Enhanced
	// ========================================================================

	export namespace Information_Enhanced {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** An account record to assign the redeemed contact to. */
			adx_assignToAccount: DevKit.Controls.Lookup;
			/** The date the invitation is no longer valid for redemption. */
			adx_expiryDate: DevKit.Controls.DateOnly;
			/** Shows the user who is redeeming the invitation. */
			adx_invitationCode: DevKit.Controls.String;
			/** The contact to send an invitation to. */
			adx_inviteContact: DevKit.Controls.Lookup;
			/** The contact that invited. */
			adx_invitercontact: DevKit.Controls.Lookup;
			/** Maximum Redemptions */
			adx_maximumRedemptions: DevKit.Controls.Integer;
			/** Type the name of the custom entity. */
			adx_name: DevKit.Controls.String;
			/** The contact associated with the redemption of this invitation. */
			adx_redeemedContact: DevKit.Controls.Lookup;
			/** The current number of times this invitation has been redeemed. */
			adx_redemptions: DevKit.Controls.Integer;
			/** A workflow to execute on the redeeming contact. */
			adx_redemptionWorkflow: DevKit.Controls.Lookup;
			/** The type of invitation. */
			adx_type: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Select the invitation's status. */
			statuscode: DevKit.Controls.OptionSet;
		}

		export interface Iinvitation_advanced_tabTabSections {
			/** Advanced */
			_62B474B9_CC48_4B2F_8FD8_B190D697DCE8: DevKit.Controls.Section;
		}

		export interface Iinvitation_general_tabTabSections {
			/** General */
			_26C36B89_7F53_4CED_9D97_934A779815E6: DevKit.Controls.Section;
			/** When Redeemed */
			_656F2307_E1F2_4515_AEB4_4F9AF287D4A4_SECTION_5: DevKit.Controls.Section;
			/** Invitee */
			invitee_section: DevKit.Controls.Section;
			/** Invitees */
			invitees_section: DevKit.Controls.Section;
			/** Redemption */
			redemption_section: DevKit.Controls.Section;
			/** Redemptions */
			redemptions_section: DevKit.Controls.Section;
		}

		/** Advanced */
		export interface Iinvitation_advanced_tabTab extends DevKit.Controls.ITab {
			Section: Iinvitation_advanced_tabTabSections;
		}

		/** General */
		export interface Iinvitation_general_tabTab extends DevKit.Controls.ITab {
			Section: Iinvitation_general_tabTabSections;
		}

		export interface ITabs {
			/** Advanced */
			invitation_advanced_tab: Iinvitation_advanced_tabTab;
			/** General */
			invitation_general_tab: Iinvitation_general_tabTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Invited Contacts */
			InviteContacts: DevKit.Controls.Grid;
			/** Assign To Web Roles */
			PowerPageComponent_AssignToWebRoles: DevKit.Controls.Grid;
			/** Redeemed Contacts */
			RedeemedContacts: DevKit.Controls.Grid;
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
			/** Invite Contacts */
			nav_adx_invitation_invitecontacts: DevKit.Controls.NavigationItem;
			/** Redeemed Contacts */
			nav_adx_invitation_redeemedcontacts: DevKit.Controls.NavigationItem;
			/** Connections */
			navConnections: DevKit.Controls.NavigationItem;
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
	 * Information_Enhanced Form class
	 * Provides typed access to all form controls
	 * Usage: new adx_invitation.Information_Enhanced(executionContext)
	 */
	export class Information_Enhanced extends FormBase<Information_Enhanced.IBody, Information_Enhanced.IHeader, Information_Enhanced.IGrid, Information_Enhanced.INavigation, Information_Enhanced.IQuickForm, Information_Enhanced.IProcess, Information_Enhanced.IDialog> {
		/**
		 * Creates a Information_Enhanced Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['adx_assignToAccount', 'adx_expiryDate', 'adx_invitationCode', 'adx_inviteContact', 'adx_invitercontact', 'adx_maximumRedemptions', 'adx_name', 'adx_redeemedContact', 'adx_redemptions', 'adx_redemptionWorkflow', 'adx_type', 'notescontrol', 'OwnerId'],
				header: ['statuscode'],
				tab: ['invitation_advanced_tab____62B474B9_CC48_4B2F_8FD8_B190D697DCE8', 'invitation_general_tab____26C36B89_7F53_4CED_9D97_934A779815E6', 'invitation_general_tab____656F2307_E1F2_4515_AEB4_4F9AF287D4A4_SECTION_5', 'invitation_general_tab___invitee_section', 'invitation_general_tab___invitees_section', 'invitation_general_tab___redemption_section', 'invitation_general_tab___redemptions_section'],
				grid: ['InviteContacts', 'PowerPageComponent_AssignToWebRoles', 'RedeemedContacts'],
				navigation: ['nav_adx_invitation_invitecontacts', 'nav_adx_invitation_redeemedcontacts', 'navConnections'],
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
			/** An account record to assign the redeemed contact to. */
			adx_assignToAccount: DevKit.Controls.Lookup;
			/** The date the invitation is no longer valid for redemption. */
			adx_expiryDate: DevKit.Controls.DateOnly;
			/** Shows the user who is redeeming the invitation. */
			adx_invitationCode: DevKit.Controls.String;
			/** The contact to send an invitation to. */
			adx_inviteContact: DevKit.Controls.Lookup;
			/** The contact that invited. */
			adx_invitercontact: DevKit.Controls.Lookup;
			/** Maximum Redemptions */
			adx_maximumRedemptions: DevKit.Controls.Integer;
			/** Type the name of the custom entity. */
			adx_name: DevKit.Controls.String;
			/** The contact associated with the redemption of this invitation. */
			adx_redeemedContact: DevKit.Controls.Lookup;
			/** The current number of times this invitation has been redeemed. */
			adx_redemptions: DevKit.Controls.Integer;
			/** A workflow to execute on the redeeming contact. */
			adx_redemptionWorkflow: DevKit.Controls.Lookup;
			/** The type of invitation. */
			adx_type: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Select the invitation's status. */
			statuscode: DevKit.Controls.OptionSet;
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** Invited Contacts */
			InviteContacts: DevKit.Controls.Grid;
			/** Assign To Web Roles */
			PowerPageComponent_AssignToWebRoles: DevKit.Controls.Grid;
			/** Redeemed Contacts */
			RedeemedContacts: DevKit.Controls.Grid;
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
			/** Invite Contacts */
			nav_adx_invitation_invitecontacts: DevKit.Controls.NavigationItem;
			/** Redeemed Contacts */
			nav_adx_invitation_redeemedcontacts: DevKit.Controls.NavigationItem;
			/** Connections */
			navConnections: DevKit.Controls.NavigationItem;
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
	 * Usage: new adx_invitation.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate adx_invitation Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['adx_assignToAccount', 'adx_expiryDate', 'adx_invitationCode', 'adx_inviteContact', 'adx_invitercontact', 'adx_maximumRedemptions', 'adx_name', 'adx_redeemedContact', 'adx_redemptions', 'adx_redemptionWorkflow', 'adx_type', 'notescontrol', 'OwnerId'],
				header: ['statuscode'],
				tab: ['invitation_advanced_tab___{62B474B9-CC48-4B2F-8FD8-B190D697DCE8}', 'invitation_general_tab___{26c36b89-7f53-4ced-9d97-934a779815e6}', 'invitation_general_tab___{656f2307-e1f2-4515-aeb4-4f9af287d4a4}_section_5', 'invitation_general_tab___invitee_section', 'invitation_general_tab___invitees_section', 'invitation_general_tab___redemption_section', 'invitation_general_tab___redemptions_section'],
				grid: ['InviteContacts', 'PowerPageComponent_AssignToWebRoles', 'RedeemedContacts'],
				navigation: ['nav_adx_invitation_invitecontacts', 'nav_adx_invitation_redeemedcontacts', 'navConnections'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
