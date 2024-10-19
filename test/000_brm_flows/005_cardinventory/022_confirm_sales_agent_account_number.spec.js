
import { test, expect } from '@playwright/test';
import { variables } from '../../variables.js';

test('Confirm sales agent account number', async ({ request }) => {

  const startTime = Date.now();

  const response = await request.get('{{cardServiceUrl}}/api/v1/sales-agents/account-number/{{customerAccountNumber}}');
  const responseTime = Date.now() - startTime;

});
