const seedCompanies = async (prisma) => {
  await prisma.company.create({
    data: {
      email: 'career@instagram.com',
      website: 'https://instagram.com',
      phone_number: '(406) 555-0120',
      hust_partner: true,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188347/ta%CC%89i_xu%C3%B4%CC%81ng_p8jard.jpg',
      address: 'Konya, Turkey',
    },
  });
  await prisma.company.create({
    data: {
      email: 'career@facebook.com',
      website: 'https://facebook.com',
      phone_number: '(406) 555-0123',
      hust_partner: false,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188560/Facebook_Logo__2019_.png_jhlfdj.webp',
      address: 'Sivas, Turkey',
    },
  });
  await prisma.company.create({
    data: {
      email: 'career@slack.com',
      website: 'https://slack.com',
      phone_number: '(406) 666-1234',
      hust_partner: false,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'Chattogram, Bangladesh',
    },
  });
};

export default seedCompanies;
