// 在requirejs中使用全局函数define定义模块
// 下面定义的模块是以其所在文件的名称来定义模块名字的
// 该模块不依赖任何模块
// 在定义模块时要指定工厂方法。在工厂方式书写代码逻辑。
define( function(){
    console.log( 1 );
} );