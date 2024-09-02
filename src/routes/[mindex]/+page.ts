import { error, type LoadEvent } from '@sveltejs/kit';
import type { PageLoad } from './$types';

class Project {
	project_name: string;

	constructor() {
		this.project_name = Math.random().toString();
	}
}

class File {
	file_name: string;
	parent: Project;

	constructor(project: Project) {
		this.file_name = Math.random().toString();
		this.parent = project;
	}
}

export const load: PageLoad = async ({ fetch, params }: LoadEvent) => {
    let myobj = new File(new Project());

	console.log("page.load -> ", params.mindex);
	console.log("page.load -> ", myobj.file_name);
	
    return {
        mjobj: myobj,
    };
};
