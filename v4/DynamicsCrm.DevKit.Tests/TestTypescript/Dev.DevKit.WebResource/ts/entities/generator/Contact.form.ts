/**
 * Contact Form - Minimal for testing global OptionSet merging
 */

/// <reference path="../../lib/devkit.d.ts" />
import { FormBase } from '../../lib/devkit';

// ============================================================================
// Minimal interfaces for Contact form
// ============================================================================
export interface IContactFormBody {
    FirstName: DevKit.Controls.String;
    LastName: DevKit.Controls.String;
    EmailAddress1: DevKit.Controls.String;
    GenderCode: DevKit.Controls.OptionSet;
}

export interface IContactFormHeader {
    OwnerId: DevKit.Controls.Lookup;
}

export interface IContactFormTabs { }
export interface IContactFormGrid { }
export interface IContactFormNavigation { }
export interface IContactFormQuickForm { }
export interface IContactFormProcess extends DevKit.Controls.IProcess { }

// ============================================================================
// Contact Form Class
// ============================================================================
export class ContactForm extends FormBase<
    IContactFormBody,
    IContactFormHeader,
    IContactFormTabs,
    IContactFormGrid,
    IContactFormNavigation,
    IContactFormQuickForm,
    IContactFormProcess
> {
    constructor(executionContext: any, defaultWebResourceName?: string) {
        super(executionContext, defaultWebResourceName, {
            body: ["FirstName", "LastName", "EmailAddress1", "GenderCode"],
            header: ["OwnerId"]
        });
    }
}

// ============================================================================
// OptionSet.Contact - Entity-specific OptionSets
// Extends global OptionSet namespace from devkit.ts
// ============================================================================

// Contact-specific OptionSet values
const ContactOptionSetValues = {
    GenderCode: Object.freeze({
        Male: 1,
        Female: 2,
        Other: 3
    }),

    FamilyStatusCode: Object.freeze({
        Single: 1,
        Married: 2,
        Divorced: 3,
        Widowed: 4
    }),

    PreferredContactMethodCode: Object.freeze({
        Any: 1,
        Email: 2,
        Phone: 3,
        Fax: 4,
        Mail: 5
    })
} as const;

// Populate global OptionSet.Contact at runtime
(globalThis as any).OptionSet = (globalThis as any).OptionSet || {};
(globalThis as any).OptionSet.Contact = ContactOptionSetValues;

// Declare global namespace extension for TypeScript IntelliSense
declare global {
    namespace OptionSet {
        namespace Contact {
            const GenderCode: typeof ContactOptionSetValues.GenderCode;
            const FamilyStatusCode: typeof ContactOptionSetValues.FamilyStatusCode;
            const PreferredContactMethodCode: typeof ContactOptionSetValues.PreferredContactMethodCode;
        }
    }
}
