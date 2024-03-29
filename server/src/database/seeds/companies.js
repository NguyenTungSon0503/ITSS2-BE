const seedCompanies = async (prisma) => {
  await prisma.company.create({
    data: {
      name: 'Instagram',
      email: 'itss2.hedspi@gmail.com',
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
      name: 'Facebook',
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
      name: 'Slack',
      email: 'itss2.hedspi@gmail.com',
      website: 'https://slack.com',
      phone_number: '(406) 666-1234',
      hust_partner: true,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'Chattogram, Bangladesh',
    },
  });

  await prisma.company.create({
    data: {
      name: 'Vinaphone',
      email: 'career@vinaphone.com',
      website: 'https://vinaphone.com',
      phone_number: '(84) 1431-4444',
      hust_partner: true,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'HaNoi, VietNam',
    },
  });
  await prisma.company.create({
    data: {
      name: 'Viettel',
      email: 'itss2.hedspi@gmail.com',
      website: 'https://viettel.com.vn',
      phone_number: '(84) 1800 8098',
      hust_partner: true,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'HaNoi, VietNam',
    },
  });
  await prisma.company.create({
    data: {
      name: 'TikTok',
      email: 'career@tiktok.com',
      website: 'https://www.tiktok.com',
      phone_number: '(406) 123-3133',
      hust_partner: false,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'Beijing, China',
    },
  });

  await prisma.company.create({
    data: {
      name: 'Schannel',
      email: 'career@schanel.com',
      website: 'https://www.schanel.com',
      phone_number: '(84) 111-7777',
      hust_partner: false,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'HoChiMinh, VietNam',
    },
  });

  await prisma.company.create({
    data: {
      name: 'Tencent',
      email: 'career@tencent.com',
      website: 'https://www.tencent.com',
      phone_number: '(46) 111-7777',
      hust_partner: false,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'Beijing, China',
    },
  });

  await prisma.company.create({
    data: {
      name: 'VNPay',
      email: 'career@vnpay.com',
      website: 'https://vnpay.vn/',
      phone_number: '(84) 123-3333',
      hust_partner: true,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'HaNoi, VietNam',
    },
  });

  await prisma.company.create({
    data: {
      name: 'Momo',
      email: 'career@momo.com',
      website: 'https://momo.vn/',
      phone_number: '(84) 222-7444',
      hust_partner: true,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'HoChiMinh, VietNam',
    },
  });

  await prisma.company.create({
    data: {
      name: 'True Money',
      email: 'career@truemoney.com',
      website: 'https://truemoney.vn/',
      phone_number: '(84) 222-7444',
      hust_partner: true,
      logo_url:
        'https://res.cloudinary.com/dul81x4pq/image/upload/v1701188657/ta%CC%89i_xu%C3%B4%CC%81ng_w2ksaw.png',
      address: 'HoChiMinh, VietNam',
    },
  });
};

export default seedCompanies;
