
export interface MeetupMagic{
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
	/**	Amended From : Link - Meetup Magic	*/
	amended_from?: string
	/**	Customer Name : Data	*/
	customer_name?: string
	/**	Posting Date : Datetime	*/
	posting_date?: string
}