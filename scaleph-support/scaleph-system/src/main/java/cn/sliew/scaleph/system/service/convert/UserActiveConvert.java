package cn.sliew.scaleph.system.service.convert;

import cn.sliew.scaleph.common.convert.BaseConvert;
import cn.sliew.scaleph.dao.entity.master.system.UserActive;
import cn.sliew.scaleph.system.service.dto.UserActiveDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * @author gleiyu
 */
@Mapper
public interface UserActiveConvert extends BaseConvert<UserActive, UserActiveDTO> {

    UserActiveConvert INSTANCE = Mappers.getMapper(UserActiveConvert.class);
}