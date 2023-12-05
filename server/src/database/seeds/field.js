const seedField = async (prisma) => {
    await prisma.field.create({
        data: {
            name: 'Điện tử/Điện lạnh',
        },
    });
    await prisma.field.create({
        data: {
            name: 'Giáo dục',
        },
    });
    await prisma.field.create({
        data: {
            name: 'Công nghệ thông tin',
        },
    });
    await prisma.field.create({
        data: {
            name: 'Kinh doanh/Bán hàng',
        },
    });
    await prisma.field.create({
        data: {
            name: 'Luật/Pháp lý',
        },
    });
    await prisma.field.create({
        data: {
            name: 'Quản lý điều hành',
        },
    });
   
    await prisma.field.create({
        data: {
            name: 'Thiết kế đồ họa',
        },
    });
};
export default seedField