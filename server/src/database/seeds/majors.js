const seedMajors = async(prisma)=>{
    await prisma.majors.create({
        data:{
            name:'Cơ Điện Tử',
            fieldId:1,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Điện dân dụng',
            fieldId:1,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Điện tử/Điện lạnh',
            fieldId:1,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Giáo Viên Toán',
            fieldId:2,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Giảng Dạy',
            fieldId:2,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Giáo Viên Ban Tự Nhiên',
            fieldId:2,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Giáo Viên Ban Xã Hội',
            fieldId:2,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Kinh Doanh',
            fieldId:4,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Bán Hàng',
            fieldId:4,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Cloud',
            fieldId:3,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Python',
            fieldId:3,
        },
    });
    await prisma.majors.create({
        data:{
            name:'Quản Trị Hệ Thống',
            fieldId:3,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Network',
            fieldId:3,
        },
    });
    await prisma.majors.create({
        data:{
            name:'Docker',
            fieldId:3,
        },
    });

    await prisma.majors.create({
        data:{
            name:'System Engineer',
            fieldId:3,
        },
    });
    await prisma.majors.create({
        data:{
            name:'Java',
            fieldId:3,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Ruby on Rails',
            fieldId:3,
        },
    });
    await prisma.majors.create({
        data:{
            name:'Devops',
            fieldId:3,
        },
    });

    await prisma.majors.create({
        data:{
            name:'React',
            fieldId:3,
        },
    });
    await prisma.majors.create({
        data:{
            name:'Golang',
            fieldId:3,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Kiểm Soát Nội Bộ',
            fieldId:5,
        },
    });
    await prisma.majors.create({
        data:{
            name:'Luật',
            fieldId:5,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Luật Lao Động',
            fieldId:5,
        },
    });
    await prisma.majors.create({
        data:{
            name:'Agency',
            fieldId:6,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Quản Lý Team',
            fieldId:6,
        },
    });
    await prisma.majors.create({
        data:{
            name:'Content Leader',
            fieldId:6,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Quản Lý Nội Dung',
            fieldId:6,
        },
    });
    await prisma.majors.create({
        data:{
            name:'UI UX Design',
            fieldId:7,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Adobe Illustrator',
            fieldId:7,
        },
    });
    await prisma.majors.create({
        data:{
            name:'3d Max',
            fieldId:7,
        },
    });

    await prisma.majors.create({
        data:{
            name:'Adobe Photoshop',
            fieldId:7,
        },
    });
    await prisma.majors.create({
        data:{
            name:'Coreldraw',
            fieldId:7,
        },
    });

   
};
export default seedMajors;