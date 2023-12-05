const seedJobsType = async(prisma)=>{

    await prisma.jobs_type.create({
        data:{
            name:'Bán thời gian',
        },
    });
    
    await prisma.jobs_type.create({
        data:{
            name:'Toàn thời gian',
        },
    });
    await prisma.jobs_type.create({
        data:{
            name:'Thực tập',
        },
    });
    await prisma.jobs_type.create({
        data:{
            name:'Làm từ xa',
        },
    });
};
export default seedJobsType;