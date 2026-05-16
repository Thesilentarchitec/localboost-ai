import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a default tenant
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'default' },
    update: {},
    create: {
      name: 'Default Tenant',
      slug: 'default',
    },
  });

  console.log('Tenant created:', tenant);

  // Create a default user
  const user = await prisma.user.upsert({
    where: { email: 'admin@localboost.ai' },
    update: {},
    create: {
      email: 'admin@localboost.ai',
      name: 'Admin User',
    },
  });

  console.log('User created:', user);

  // Link user to tenant
  const membership = await prisma.membership.upsert({
    where: {
      userId_tenantId: {
        userId: user.id,
        tenantId: tenant.id,
      },
    },
    update: {
      role: 'OWNER',
    },
    create: {
      userId: user.id,
      tenantId: tenant.id,
      role: 'OWNER',
    },
  });

  console.log('Membership created:', membership);

  // Create some tools
  const tool1 = await prisma.tool.upsert({
    where: { id: 'tool-1' },
    update: {},
    create: {
      id: 'tool-1',
      name: 'Instagram Caption Generator',
      description: 'Generate engaging captions for your Instagram posts.',
      category: 'Social Media',
      icon: 'instagram',
      promptTemplate: 'Generate an Instagram caption for: {{topic}}',
      inputFields: [
        { name: 'topic', type: 'text', label: 'What is your post about?' },
      ],
      outputType: 'text',
    },
  });

  console.log('Tool 1 created:', tool1);

  const tool2 = await prisma.tool.upsert({
    where: { id: 'tool-2' },
    update: {},
    create: {
      id: 'tool-2',
      name: 'Google Business Profile Response',
      description: 'Generate professional responses to your Google reviews.',
      category: 'Local SEO',
      icon: 'google',
      promptTemplate: 'Respond to this review: {{review}}',
      inputFields: [
        { name: 'review', type: 'textarea', label: 'Paste the customer review here' },
      ],
      outputType: 'text',
    },
  });

  console.log('Tool 2 created:', tool2);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
