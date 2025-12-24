namespace DialogControls {
    enum FieldRequiredLevel {
        None,
        Required,
        Recommended
    }
    interface IControlBase {
        Disabled: boolean;
        Label: string;
        Visible: boolean;
    }
    interface IControl extends IControlBase {
        AddOnChange(callback: (executionContext: any) => void): void;
        RemoveOnChange(callback: (executionContext: any) => void): void;
        FireOnChange(): void;
        SetNotification(message: string, uniqueId?: string): boolean;
        ClearNotification(uniqueId: string): boolean;
        RequiredLevel: FieldRequiredLevel;
        readonly IsDirty: boolean;
        readonly IsValid: boolean;
    }
    interface IControlText extends IControl {
        readonly MaxLength: number;
        Value: string;
    }
    interface IControlNumber extends IControl {
        readonly Max: number;
        readonly Min: number;
        Precision: number;
        Value: number;
    }
    interface IControlSelectBase extends IControl {
        readonly InitialValue: number;
    }
    interface IControlSelect extends IControlSelectBase {
        AddOption(text: string, value: number, index?: number): void;
        ClearOptions(): void;
        RemoveOption(value: number): void;
        readonly Options: Array<TextValueNumber>;
        readonly ControlOptions: Array<TextValueNumber>;
        readonly Text: string;
    }
    interface EntityReference {
        entityType: string;
        id: Guid;
        name?: string;
    }
    interface TextValueNumber {
        readonly text: string,
        readonly value: number
    }
    interface String extends IControlText {
    }
    interface Memo extends IControlText {
    }
    interface Integer extends IControlNumber {
    }
    interface Decimal extends IControlNumber {
    }
    interface Double extends IControlNumber {
    }
    interface Money extends IControlNumber {
    }
    interface Button extends IControlBase {
    }
    interface Label extends IControlBase {
    }
    interface Boolean extends IControlSelectBase {
        Value: boolean;
    }
    interface OptionSet extends IControlSelect {
        readonly SelectedOption: TextValueNumber;
        Value: number;
    }
    interface MultiOptionSet extends IControlSelect {
        Value: Array<number>;
    }
    interface Lookup extends IControl {
        AddCustomFilter(filter: string, entityLogicaName?: string): void;
        AddCustomView(viewId: Guid, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
        AddPreSearch(callback: (executionContext: any) => void): void;
        RemovePreSearch(callback: (executionContext: any) => void): void;
        AddLookupTagClick(callback: (executionContext: any) => void): void;
        RemoveLookupTagClick(callback: (executionContext: any) => void): void;
        Value: Array<EntityReference>;
        DefaultView: Guid;
        EntityTypes: Array<string>;
    }
    interface DateTime extends IControl {
        ShowTime: boolean;
        Value: any;
    }
    interface Date extends IControl {
        Value: any;
    }
}