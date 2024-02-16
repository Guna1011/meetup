
export interface MeetupHoliday{
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Date : Date	*/
	holiday_date: string
	/**	Description : Text Editor	*/
	description: string
}