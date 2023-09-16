import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const answers = await request.formData();
		const searchParams = new URLSearchParams(
			Array.from(answers.entries()).map(([key, value]) => [key, value.toString()])
		);

		throw redirect(303, '/results?' + searchParams.toString());
	}
} satisfies Actions;
